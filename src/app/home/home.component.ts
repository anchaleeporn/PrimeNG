import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../../Car';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    text: string;
    constructor() { }
    onclick() {}
    ngOnInit() {
    
    }
}