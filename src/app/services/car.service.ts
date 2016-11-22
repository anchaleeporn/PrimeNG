import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {List} from '../../List';
import 'rxjs/Rx';
    
@Injectable()
export class CarService {

    private username:string;
    
    constructor(private http: Http) {}

    getCarsSmall() {
        return this.http.get('/cars-small.json')
                    .toPromise()
                    .then(res => <List[]> res.json().data)
                    .then(data => { return data; });
    }

    updateUser(username:string){
        this.username = username;
    }
}