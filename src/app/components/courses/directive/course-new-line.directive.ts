import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Course } from 'src/app/model/course';

@Directive({
  selector: '[appCourseNewLine]'
})
export class CourseNewLineDirective implements AfterViewInit {
  @Input('appCourseNewLine') course: Course = {} as Course;
  currentDate = new Date();
  oldDate = new Date();

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) {
  }

  public ngAfterViewInit(): void {
    this.oldDate.setDate(this.oldDate.getDate() - 14);

    const [child] = this.element.nativeElement.children;
    console.log("directive");

    let currentDate = new Date(this.currentDate);
    let oldDate = new Date(this.oldDate);
    let creationDate = new Date(this.course.creationDate);

    if (creationDate < currentDate && creationDate >= oldDate) {
      this.renderer.setStyle(child, 'border', '3px solid rgb(0, 255, 0)'); // Зеленый цвет
    }

    if (creationDate > currentDate) {
      this.renderer.setStyle(child, 'border', '3px solid rgb(0, 0, 255)'); // Синий цвет
    }

  }
}
