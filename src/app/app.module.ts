import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { MycomponentComponent } from './components/mycomponent/mycomponent.component';
import {ButtonModule} from "primeng/button";
import { CourseComponent } from './components/course/course.component';
import { CourseListComponent } from './components/course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    MycomponentComponent,
    CourseComponent,
    CourseListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule
    ],
  exports: [HeaderComponent, FooterComponent, LogoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
