import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseAddComponent } from './course-add/course-add.component';

const routes: Routes =[
  {path: '' , pathMatch: 'full', redirectTo: '/course-list'},
  {
    path: '',  component: CoursesComponent,
    children: [
      {path: 'course-list' , component: CourseListComponent},
      {path: 'course-add' , component: CourseAddComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
