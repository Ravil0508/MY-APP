import {ChangeDetectorRef, Component, OnInit, Output} from '@angular/core';
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

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
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
  public courses$: Observable<Course[]> = merge(
    this.refresh$.pipe(switchMap((limit) => this.coursesService.getCoursesList(limit))),
    this.search$
  );

  constructor(
    private confirmationService: ConfirmationService,
    private filter: FilterPipe,
    private readonly coursesService: CoursesService,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private searchComponent: SearchComponent
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
    this.getData();
  }

  public loadCourse(currentLength: number): void{
    console.log("Загрузка курсов");
    console.log('load more');
    this.refresh$.next(currentLength + 3)
    // this.page += 1;
    // this.coursesService.getCoursesList(this.page).subscribe(
    //   (result) => {
    //     result.map((x) => {
    //       this.data.push(x)
    //     })
    //   });
  }

  public selectCourse(course: Course): void{
    console.log("ID курса " +course.id);
  }

  public searchClick(searchValue: string): void{
    this.coursesService.searchCourses(searchValue).subscribe(
      (result) => {
        this.data = result;
        this.cdr.detectChanges();
      },
      (error) => { console.log(error)},
      () => {
        if(this.data.length == 0) {
          this.show = false;
        } else {
          this.show = true;
        }
      });
  }

  public editCourse(course: Course): void{
    const extras: NavigationExtras = {
      queryParams: {
        id: course.id
      },
    };
    this.router.navigate(['/courses/', course.id]);
  }

  getData() {
    this.coursesService.getCoursesList().subscribe(
      (result) => {
        this.data = result;
      });
    this.page = 1;
  }

  addCourse(){
    this.router.navigate(['/courses/new']);
  }

  public deleteCourse(course: Course): void{
    console.log("ID курса " + course.id);
    this.coursesService.deleteCourse(course.id!).subscribe(
      (result) => {
        console.log("Успешно удалили");
        this.getData();
        this.page = 1;
      });
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
      switchMap((value) => this.coursesService.searchCourses(value).pipe(
        tap((courses) => {
          if (courses.length === 0) {
            this.show = false;
          } else {
            this.show = true;
          }
          if(text == '')
            this.refresh$.next(3)
          else
            this.search$.next(courses)
        })
      ))
    ).subscribe();
  }

  searchClear() {
    this.searchValue = ''
    this.search('');
  }

  protected readonly Output = Output;
}
