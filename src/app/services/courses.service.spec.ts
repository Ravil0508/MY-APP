import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Course } from '../model/course';
import { autoSpy, SpyOf } from '../utils/auto-spy';
import { cold } from 'jasmine-marbles';

import { CoursesService } from './courses.service';
import { Author } from '../model/author';

describe('CoursesService', () => {
  let service: CoursesService;
  const coursesUrl = 'http://localhost:3000';
  const { build, httpClient } = setup<CoursesService>();

  beforeEach(() => {
    service = build();
  });

  afterEach(() => {
    httpClient.get.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get courseList', () => {
    const expected: Course[] = [{ id: 1, title: 'Видео курс по Angular 12', creationDate: new Date('2023-04-20'), duration: 5, description: 'Описание курса по Angular 14', author: [] }];
    httpClient.get.and.returnValue(cold('-a', { a: expected }));

    expect(service.getCoursesList()).toBeObservable(cold('-a', { a: expected }));
    expect(httpClient.get).toHaveBeenCalledOnceWith(`${coursesUrl}/courseslist?_page=1&_limit=3`);
  });

  it('should get course', () => {
    const expected: Course[] = [{ id: 1, title: 'Видео курс по Angular 12', creationDate: new Date('2023-04-20'), duration: 5, description: 'Описание курса по Angular 14', author: [] }];
    httpClient.get.and.returnValue(cold('-a', { a: expected }));

    expect(service.getCourse()).toBeObservable(cold('-a', { a: expected }));
    expect(httpClient.get).toHaveBeenCalledOnceWith(`${coursesUrl}/courseslist`);
  });

  it('should get course by id', () => {
    const expected: Course[] = [{ id: 1, title: 'Видео курс по Angular 12', creationDate: new Date('2023-04-20'), duration: 5, description: 'Описание курса по Angular 14', author: [] }];
    httpClient.get.and.returnValue(cold('-a', { a: expected }));

    expect(service.getCourseById(1)).toBeObservable(cold('-a', { a: expected }));
    expect(httpClient.get).toHaveBeenCalledOnceWith(`${coursesUrl}/courseslist/1`);
  });



  it('should searchCourses course', () => {
    const expected: Course[] = [{ id: 1, title: 'Видео курс по Angular 12', creationDate: new Date('2023-04-20'), duration: 5, description: 'Описание курса по Angular 14', author: [] }];
    httpClient.get.and.returnValue(cold('-a', { a: expected }));

    expect(service.searchCourses("Angular")).toBeObservable(cold('-a', { a: expected }));
    expect(httpClient.get).toHaveBeenCalledOnceWith(`${coursesUrl}/courseslist/?q=Angular`);
  });

  it('should get Authors', () => {
    const expected: Author[] = [{ id: 'd9ef5b626a8d8e4d64925fbac8bdad5d', name: 'Иванов Иван' }];
    httpClient.get.and.returnValue(cold('-a', { a: expected }));

    expect(service.getAuthors()).toBeObservable(cold('-a', { a: expected }));
    expect(httpClient.get).toHaveBeenCalledOnceWith(`/authors`);
  });

  it('should create course', () => {
    const newCourse: Course = {
      id: 123,
      title: 'Test Course',
      creationDate: new Date(),
      duration: 60,
      description: 'Test Course Description',
      topRated: false,
      author: [{ id: 'd9ef5b626a8d8e4564925fbac8bdad5d', name: 'Test name' }]
    };

    httpClient.post.and.returnValue(cold('-a', { a: newCourse }));

    expect(service.createCourse(newCourse)).toBeObservable(cold('-a', { a: newCourse }));
    expect(httpClient.post).toHaveBeenCalledOnceWith(`${coursesUrl}/courseslist`, newCourse);

  });

  it('should update course', () => {
    const newCourse: Course = {
      id: 123,
      title: 'Test Course2',
      creationDate: new Date(),
      duration: 50,
      description: 'Test Course Description',
      topRated: false,
      author: [{ id: 'd9ef5b626a8d8e4564925fbac8bdad5d', name: 'Test name' }]
    };

    httpClient.put.and.returnValue(cold('-a', { a: newCourse }));

    expect(service.updateCourse(newCourse)).toBeObservable(cold('-a', { a: newCourse }));
    expect(httpClient.put).toHaveBeenCalledOnceWith(`${coursesUrl}/courseslist/123`, newCourse);

  });


  it('should delete course', () => {
    const courseId = 123;

    httpClient.delete.and.returnValue(cold('-a', { a: courseId }));

    expect(service.deleteCourse(courseId)).toBeObservable(cold('-a', { a: courseId }));
    expect(httpClient.delete).toHaveBeenCalledOnceWith(`${coursesUrl}/courseslist/123`);

  });




});

function setup<T>(): { default: () => any; build: () => T; httpClient: SpyOf<HttpClient>, [key: string]: any } {
  const httpClient: SpyOf<HttpClient> = autoSpy(HttpClient);
  const builder = {
    httpClient,
    default(): any {
      return builder;
    },
    build(): any {
      return new CoursesService(httpClient);
    }
  };
  return builder;
}
