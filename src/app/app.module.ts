import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

<<<<<<< HEAD
import {InputTextModule,DataTableModule,SharedModule,ButtonModule} from 'primeng/primeng';
=======

import {InputTextModule, DataTableModule, SharedModule} from 'primeng/primeng';
>>>>>>> 9e94ac60caf1823c7bf23de227a7ec5dfce0c0d2

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
