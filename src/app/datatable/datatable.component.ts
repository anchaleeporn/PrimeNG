import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car.service';
import {List} from '../../List';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  lists: List[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(lists => this.lists = lists);
  }

}
