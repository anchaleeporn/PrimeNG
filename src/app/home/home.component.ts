import { Component, OnInit } from '@angular/core';
//import {Datatable} from '../datatable/datatable.component';
import {CarService} from '../services/car.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarService]
})
export class HomeComponent implements OnInit {
    text: string;
    constructor() { }
    onclick() {}
    ngOnInit() {
    }
}