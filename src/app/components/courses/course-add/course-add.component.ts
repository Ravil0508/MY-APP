import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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
  public coursesMenu: MenuItem[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private courseList: CourseListComponent,
              private courseService: CoursesService) {
    activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.coursesMenu = [
      { label: ' Курсы', routerLink: '/courses', icon: 'pi pi-home' },
    ]
    if (this.id > 0) {
      let course = this.courseList.getData(this.id);

      this.coursesMenu.push({ label: course.title });


      this.course = {
        id: course.id,
        title: course.title,
        creationDate: new Date(course.creationDate),
        duration: course.duration,
        description: course.description,
      }
    }
  }

  cancel(){
    console.log("cancel course")
    this.router.navigate(['/courses']);
  }

  save(course: Course){
    console.log("COURSE", course.id);
    if(course.id) {
      console.log("save course")
      this.courseService.updateItem(course)
    } else {
      this.courseService.createCourse(course)
    }
    this.router.navigate(['/courses']);
  }

}
