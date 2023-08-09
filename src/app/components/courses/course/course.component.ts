import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Course } from "../../../model/course";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  @Input() public course: Course = {} as Course;
  @Output() public editCourse: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() public deleteCourse: EventEmitter<Course> = new EventEmitter<Course>();


  public editCours(): void {
    this.editCourse.emit(this.course);
  }

  public deleteCours(): void {
    this.deleteCourse.emit(this.course);
  }
}
