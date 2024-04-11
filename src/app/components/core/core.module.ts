import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {LogoComponent} from "./logo/logo.component";
import {MycomponentComponent} from "../mycomponent/mycomponent.component";
import {BreadcrumbsComponent} from "./breadcrumbs/breadcrumbs.component";
import {SearchComponent} from "./search/search.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {ButtonModule} from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from "primeng/card";
import { NotFoundComponent } from './not-found/not-found.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import { NotFindComponent } from './not-find/not-find.component';
import { LoaderComponent } from './loader/loader.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    MycomponentComponent,
    BreadcrumbsComponent,
    SearchComponent,
    NotFoundComponent,
    NotFindComponent,
    LoaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        CommonModule,
        BreadcrumbModule,
        ProgressSpinnerModule,
        FormsModule
    ],
  exports: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumbsComponent, SearchComponent, NotFoundComponent, NotFindComponent, LoaderComponent]
})
export class CoreModule { }
