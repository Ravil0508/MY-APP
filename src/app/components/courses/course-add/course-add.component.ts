import {Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef} from '@angular/core';
import { Course } from 'src/app/model/course';
import {CourseListComponent} from "../course-list/course-list.component";
import {FilterPipe} from "../pipes/filter.pipe";
import {ConfirmationService, MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../../services/courses.service";

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CourseListComponent, FilterPipe, ConfirmationService]
})
export class CourseAddComponent implements OnInit {
  public course: Course = {
    title : "",
    creationDate: new Date(),
    duration: 0,
    description: "",
  };

  id = 0;
  public title = "Добавление курса";
  public coursesMenu: MenuItem[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private courseService: CoursesService,
              private cdr: ChangeDetectorRef
  ) {
    console.log("constructor constructor");
    activatedRoute.params.subscribe(params => this.id = params['id']);
    console.log("constructor constructor", this.id);
  }

  ngOnInit(): void {
    this.coursesMenu = [
      { label: ' Курсы', routerLink: '/courses', icon: 'pi pi-home' },
    ]
    if (this.id > 0) {
      this.title = "Редактирование курса";
      this.courseService.getCourseById(this.id).subscribe(
        (course) => {
          this.coursesMenu.push({ label: course.title });
          this.course = {
            title: course.title,
            creationDate: new Date(course.creationDate),
            duration: course.duration,
            description: course.description,
          }
          this.cdr.detectChanges();
        });
    }
    else {
      this.coursesMenu.push({ label: 'Новый курс' });

    }
  }

  cancel(){
    console.log("cancel course")
    this.router.navigate(['/courses']);
  }

  save(course: Course){
    let courseForm = {
      id: this.id,
      title: this.course.title,
      creationDate: this.course.creationDate,
      duration: this.course.duration,
      description: this.course.description,
    }

    if (this.id > 0) {
      this.courseService.updateCourse(courseForm).subscribe(
        (result) => {
          console.log("Успешно изменили");
        });
    }
    else {
      this.courseService.createCourse(courseForm).subscribe(
        (result) => {
          console.log("Успешно добавили");
        });
    }
    this.router.navigate(['/courses']);
  }

}
