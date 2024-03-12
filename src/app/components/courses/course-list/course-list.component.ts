import {Component, OnInit, Output} from '@angular/core';
import { Course} from "../../../model/course";
import {ConfirmationService, MenuItem} from "primeng/api";
import {FilterPipe} from "../pipes/filter.pipe";
import {CoursesService} from "../../../services/courses.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [ FilterPipe,  ConfirmationService ]
})
export class CourseListComponent implements OnInit {
  public courses: Course[] = [];
  public coursesMenu: MenuItem[] = [];
  public data: Course[] = [];
  searchValue: string = "";
  show: boolean = true;

  constructor(
    private confirmationService: ConfirmationService,
    private filter: FilterPipe,
    private readonly coursesService: CoursesService,
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
      {label:'Курсы'}
    ];
    this.courses = this.coursesService.getList();
    this.data = this.courses
  }

  public loadCourse(): void{
    console.log("Загрузка курсов");
  }

  public selectCourse(course: Course): void{
    console.log("ID курса " +course.id);
  }

  public searchClick(): void{

    console.log("this.searchValue", this.searchValue);
    this.data = this.filter.transform(this.courses, this.searchValue);
    this.show = this.data.length != 0;
    console.log("this.searchValue", this.data);
  }

  public editCourse(course: Course): void{
    console.log("id курса " +course.id);
  }

  public deleteCourse(course: Course): void{
    console.log("id курса " +course.id);
    this.courses = this.coursesService.removeItem(course.id, this.data);
    this.data = this.courses;
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

  protected readonly Output = Output;
}
