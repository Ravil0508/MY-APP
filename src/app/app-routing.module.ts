import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {CourseListComponent} from "./components/courses/course-list/course-list.component";
import {CourseAddComponent} from "./components/courses/course-add/course-add.component";
import {NotFoundComponent} from "./components/core/not-found/not-found.component";
import {AuthGuardGuard} from "./services/auth-guard.guard";
import {NotFindComponent} from "./components/core/not-find/not-find.component";

const routes: Routes = [
  { path: 'courses', component: CourseListComponent, canActivate: [AuthGuardGuard] },
  { path: 'courses/new', component: CourseAddComponent, canActivate: [AuthGuardGuard] },
  { path: 'courses/:id', component: CourseAddComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: AuthComponent },
  { path: '', pathMatch: 'full', redirectTo: '/courses' },
  { path: '**', component: NotFindComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
