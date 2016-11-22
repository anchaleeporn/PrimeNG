import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {InputTextModule,DataTableModule,SharedModule,ButtonModule} from 'primeng/primeng';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { DatatableComponent} from './datatable/datatable.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    DataTableModule,
    SharedModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
