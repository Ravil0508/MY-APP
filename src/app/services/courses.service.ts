import { Injectable } from '@angular/core';
import { Course } from 'src/app/model/course';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../model/author";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly coursesUrl = 'http://localhost:3000';
  //coursesNew: Course[] = [];

  constructor(private readonly httpClient: HttpClient) { }

  private courses: Course[] = [];


  public getCourse(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.coursesUrl}/courseslist`)
  }

  public getCoursesList(page = 1, limit = 4): Observable<Course[]> {
    return this.httpClient.get<Array<Course>>(`${this.coursesUrl}/courseslist?_page=${page}&_limit=${limit}`)
  }

  public createCourse(course: Course) {
    return this.httpClient.post<Course>(`${this.coursesUrl}/courseslist`, course)
  }

  public getCourseById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.coursesUrl}/courseslist/${id}`).pipe(
    );
  }

  public updateCourse(course: Course) {
    return this.httpClient.put<Course>(`${this.coursesUrl}/courseslist/${course.id}`, course)
  }

  public deleteCourse(id: number): Observable<Course> {
    return this.httpClient.delete<Course>(`${this.coursesUrl}/courseslist/${id}`)
  }

  public searchCourses(string: string): Observable<Course[]> {
    return this.httpClient.get<Array<Course>>(`${this.coursesUrl}/courseslist/?q=${string}`)
  }

  public getAuthors(): Observable<Array<Author>> {
    return this.httpClient.get<Array<Author>>('/authors')
  }

  // public getList(): Course[]{
  //   return this.courses
  // }
  //
  // public createCourse(course: Course): Course[]{
  //   return this.courses
  // }
  //
  // public getItemById(): Course[]{
  //   return this.courses
  // }
  //
  // public updateItem(course: Course): Course[]{
  //   const index = this.courses.findIndex(c => c.id === course.id);
  //
  //   // Если курс с заданным id найден
  //   if (index !== -1) {
  //     // Обновляем свойства курса
  //     this.courses[index] = {
  //       ...this.courses[index],
  //       title: course.title,
  //       creationDate: course.creationDate,
  //       duration: course.duration,
  //       description: course.description,
  //       topRated: course.topRated!
  //     };
  //   }
  //   return this.courses
  // }
  //
  // public removeItem(id: number | undefined, data: Course[]): Course[] {
  //   this.coursesNew = data.filter((item) => {return item.id != id});
  //   return this.coursesNew;
  // }

}
