import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { Course } from "../../../model/course";
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() public course: Course = {} as Course;
  @Output() public editEvent: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() public deleteEvent: EventEmitter<Course> = new EventEmitter<Course>();

  currentDate = new Date();
  creationDate  = new Date();
  oldDate = new Date();
  constructor() {
    registerLocaleData(localeRu, 'ru');
  }

  ngOnInit(): void {
    this.oldDate.setDate(this.oldDate.getDate() - 14);
    this.creationDate = this.course.creationDate;
  }

  public editCourse(): void{
    this.editEvent.emit(this.course);
  }

  public deleteCourse(): void{
    this.deleteEvent.emit(this.course);
  }
}
