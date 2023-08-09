import {NgModule} from "@angular/core";
import {AppComponent} from "../../app.component";
import {HeaderComponent} from "../core/header/header.component";
import {FooterComponent} from "../core/footer/footer.component";
import {LogoComponent} from "../core/logo/logo.component";
import {MycomponentComponent} from "../mycomponent/mycomponent.component";
import {CourseComponent} from "./course/course.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {BreadcrumbsComponent} from "../core/breadcrumbs/breadcrumbs.component";
import {SearchComponent} from "../core/search/search.component";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    CourseComponent,
    CourseListComponent
  ],
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    NgForOf
  ],
  exports: [CourseComponent, CourseListComponent]
})
export class CourseModule {}
