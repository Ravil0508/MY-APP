import {ChangeDetectorRef, Component, OnInit, Output} from '@angular/core';
import { Course} from "../../../model/course";
import {ConfirmationService, MenuItem} from "primeng/api";
import {FilterPipe} from "../pipes/filter.pipe";
import {CoursesService} from "../../../services/courses.service";
import {NavigationExtras, Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [ FilterPipe,  ConfirmationService ]
})
export class CourseListComponent implements OnInit {
  public courses$: Observable<Course[]> = this.coursesService.getCoursesList();
  public coursesMenu: MenuItem[] = [];
  public data: Course[] = [];
  searchValue: string = "";
  show: boolean = true;
  page: number = 1;

  constructor(
    private confirmationService: ConfirmationService,
    private filter: FilterPipe,
    private readonly coursesService: CoursesService,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
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

  public loadCourse(): void{
    console.log("Загрузка курсов");
    this.page += 1;
    this.coursesService.getCoursesList(this.page).subscribe(
      (result) => {
        result.map((x) => {
          this.data.push(x)
        })
      });
  }

  public selectCourse(course: Course): void{
    console.log("ID курса " +course.id);
  }

  public searchClick(): void{
    this.coursesService.searchCourses(this.searchValue).subscribe(
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
    console.log('resetFilters');
    this.searchValue = "";
    this.show = true;
    this.getData();
  }

  protected readonly Output = Output;
}
