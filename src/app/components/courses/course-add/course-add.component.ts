import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddComponent implements OnInit {
  public course: Course = {
    title : "",
    creationDate: new Date(),
    duration: 0,
    description: "",
  } ;
  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    console.log("cancel course")
  }
  save(){
    console.log("save course")
  }

}
