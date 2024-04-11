import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CourseModule} from "./components/courses/course.module";
import {CoreModule} from "./components/core/core.module";
import {AuthModule} from "./components/auth/auth.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/interceptor";
import {SearchComponent} from "./components/core/search/search.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseModule,
    CoreModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    SearchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
