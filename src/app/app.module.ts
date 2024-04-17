import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoursesModule} from "./components/courses/courses.module";
import {CoreModule} from "./components/core/core.module";
import {AuthModule} from "./components/auth/auth.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/interceptor";
import {SearchComponent} from "./components/core/search/search.component";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffectsEffects } from './store/store/courses/effects/courses-effects.effects';
import { AuthEffectsEffects } from './store/store/auth/effects/auth-effects.effects';
import {environment} from "../environments/environment";
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {InputNumberModule} from "primeng/inputnumber";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    InputNumberModule,
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    CoreModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
    EffectsModule.forRoot([CoursesEffectsEffects, AuthEffectsEffects]),
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
