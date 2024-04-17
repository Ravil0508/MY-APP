import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import {CourseListComponent} from "../course-list/course-list.component";
import {DurationComponent} from "../duration/duration.component";

describe('CourseComponent', () => {
  let component: CourseComponent;
  const { build } = setup<CourseComponent>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent, CourseListComponent, DurationComponent]
    });
    component = build();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit course', () => {
    component.course = { id: 12, title: "Test title", creationDate: new Date('2023-10-25'), duration: 60, description: "Test description", topRated: true, author: [] };
    spyOn(component.editEvent, 'emit');

    component.editCourse();

    expect(component.editEvent.emit).toHaveBeenCalledOnceWith(component.course);
  });

  it('should delete course', () => {
    component.course = { id: 12, title: "Test title", creationDate: new Date('2023-10-25'), duration: 60, description: "Test description", topRated: true, author: [] };
    spyOn(component.deleteEvent, 'emit');

    component.deleteCourse();

    expect(component.deleteEvent.emit).toHaveBeenCalledOnceWith(component.course);
  });

});

function setup<T>(): { default: () => any; build: () => T;[key: string]: any } {
  const builder = {
    default(): any {
      return builder;
    },
    build(): any {
      return new CourseComponent();
    }
  };
  return builder;
}
