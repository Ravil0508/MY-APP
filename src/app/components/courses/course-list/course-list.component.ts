import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Output} from '@angular/core';
import { Course} from "../../../model/course";
import {ConfirmationService, MenuItem} from "primeng/api";
import {FilterPipe} from "../pipes/filter.pipe";
import {CoursesService} from "../../../services/courses.service";
import {NavigationExtras, Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter, merge,
  Observable,
  of,
  Subject,
  switchMap,
  tap
} from "rxjs";
import {SearchComponent} from "../../core/search/search.component";
import {selectCourses, selectCoursesCount} from "../../../store/store/courses/selectors/courses-selectors.selectors";
import {Store} from "@ngrx/store";
import { State } from 'src/app/store';
import {getCourses, deleteCourse, searchCourses} from "../../../store/store/courses/actions/courses-actions.actions";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ FilterPipe,  ConfirmationService ]
})
export class CourseListComponent implements OnInit {
  public coursesMenu: MenuItem[] = [];
  public data: Course[] = [];
  searchValue: string = "";
  show: boolean = true;
  page: number = 1;

  private refresh$: BehaviorSubject<number> = new BehaviorSubject<number>(3);
  private search$: Subject<Course[]> = new Subject<Course[]>();
  public courses$: Observable<Course[]> = this.store.select(selectCourses);

  constructor(
    private confirmationService: ConfirmationService,
    private router: Router,
    private store: Store<State>
  ) {

  }

  public gOnChanges(){
    console.log('gOnChanges');
  }
  public ngDoCheck(){
    console.log('ngDoCheck');
  }
  public ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  public ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  public ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  public ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  public ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  public ngOnInit(): void {
    this.coursesMenu = [
      { label: ' Курсы', routerLink: '/courses', icon: 'pi pi-home' },
    ];
    this.store.dispatch(getCourses({}))
  }

  public loadCourse(): void{
    console.log("Загрузка курсов");
    let limit = 0;
    this.store.select(selectCoursesCount).subscribe(
      (limitCount: number) => {
        limit = limitCount + 3;
      }

    )
    console.log("limit после  " + limit);
    this.store.dispatch(getCourses({ limit }));
  }

  public selectCourse(course: Course): void{
    console.log("ID курса " +course.id);
  }

  public editCourse(course: Course): void{
    this.router.navigate(['/courses/', course.id]);
  }

  addCourse(){
    this.router.navigate(['/courses/new']);
  }

  public deleteCourse(course: Course): void{
    console.log("ID курса " + course.id);
    let courseId = course.id!;
    this.store.dispatch(deleteCourse({ courseId }))
  }

  confirmDeleteCourse(course: Course) {
    console.log("удаление");
    this.confirmationService.confirm({
      message: 'Вы действительно хотите удалить этот курс?',
      header: 'Удаление курса',
      icon: 'pi pi-exclamation-triangle',
      accept: () => this.deleteCourse(course),
    });
    console.log("удаление2");
  }

  resetFilters() {
    this.search('');
  }

  public search(text: string): void {
    // this.searchSubject.next(this.searchValue as string);
    // this.searchSubject.pipe(
    //   debounceTime(250),
    //   filter((value) => !!value && value.length >= 3),
    //   distinctUntilChanged(),
    // ).subscribe(searchValue => {
    //   this.searchClick(searchValue);
    //
    // });
    of(text).pipe(
      debounceTime(250),
      filter((value) => (!!value && value.length >= 3) || (value == '') ),
      distinctUntilChanged(),
      tap((value) => this.store.dispatch(searchCourses({ input: value.toLowerCase() })))
    ).subscribe();
  }

  searchClear() {
    this.searchValue = ''
    this.search('');
  }

  protected readonly Output = Output;
}
