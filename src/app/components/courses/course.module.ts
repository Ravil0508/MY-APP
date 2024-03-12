import {NgModule} from "@angular/core";
import {CourseComponent} from "./course/course.component";
import {CourseListComponent} from "./course-list/course-list.component";
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import {CourseNewLineDirective} from "./directive/course-new-line.directive";
import {CoursesComponent} from "./courses.component";

@NgModule({
  declarations: [
    CourseListComponent,
    CourseComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    CourseNewLineDirective,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ConfirmDialogModule,
    BreadcrumbModule
  ],
  exports: [CourseComponent, CourseListComponent, CoursesComponent]
})
export class CourseModule {}
