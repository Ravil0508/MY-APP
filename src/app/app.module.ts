import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { LogoComponent } from './components/core/logo/logo.component';
import { MycomponentComponent } from './components/mycomponent/mycomponent.component';
import { ButtonModule} from "primeng/button";
import { CourseComponent } from './components/courses/course/course.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { BreadcrumbsComponent } from './components/core/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './components/core/search/search.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {CourseModule} from "./components/courses/course.module";
import {CoreModule} from "./components/core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        CourseModule,
        CoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
