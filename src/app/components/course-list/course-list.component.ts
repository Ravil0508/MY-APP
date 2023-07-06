import {Component, OnInit} from '@angular/core';
import { Course} from "../../model/course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courses: Course[] = [];

  public ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        title: 'Курс обучению пчеловодству и добычи меда у диких пчел и безумных ос',
        creationDate: '05.08.2023',
        duration: 12,
        description: 'Курс предназначен для любетелей меда, экстрима, а так же для тех кто предпочитает нестандартное лечение классическому, ведь яд пчел и ос необычайно полезен'
    },
      {
        id: 2,
        title: 'Курс по программированию для тех кто хочет стать программистом',
        creationDate: '05.08.2022',
        duration: 18,
        description: 'Обучение происходит онлайн, в случае успешного обучения вы можете получить в оффер в компанию из топ-10'
      }];
  }

  public loadMore(): void {
    console.log('load more');
  }

  public editCourse(): void {
    console.log('edit course');
  }

  public deleteCourse(): void {
    console.log('delete course');
  }
}
