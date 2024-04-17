import {NgModule} from "@angular/core";
import {CourseComponent} from "./course/course.component";
import {CourseListComponent} from "./course-list/course-list.component";
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import {CourseNewLineDirective} from "./directive/course-new-line.directive";
import {CoursesComponent} from "./courses.component";
import { CourseAddComponent } from './course-add/course-add.component';
import { AuthorComponent } from './author/author.component';
import { DurationComponent } from './duration/duration.component';
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {CoreModule} from "../core/core.module";
import {AutoCompleteModule} from "primeng/autocomplete";
import {InputTextareaModule} from "primeng/inputtextarea";

@NgModule({
  declarations: [
    CourseListComponent,
    CourseComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    CourseNewLineDirective,
    CoursesComponent,
    CourseAddComponent,
    AuthorComponent,
    DurationComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ConfirmDialogModule,
    BreadcrumbModule,
    InputNumberModule,
    CalendarModule,
    CoreModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    InputTextareaModule
  ],
  exports: [CourseComponent, CourseListComponent, CoursesComponent, CourseAddComponent]
})
export class CoursesModule {}
