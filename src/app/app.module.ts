import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {InputMaskModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    InputMaskModule,
    AutoCompleteModule,
    DataTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
