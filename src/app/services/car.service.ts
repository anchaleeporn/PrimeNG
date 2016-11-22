import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {List} from '../../List';
import 'rxjs/Rx';
    
@Injectable()
export class CarService {
    
    constructor(private http: Http) {}

    getCarsSmall() {
        return this.http.get('/cars-small.json')
                    .toPromise()
                    .then(res => <List[]> res.json().data)
                    .then(data => { return data; });
    }
}