import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BloomreachService {

  constructor (
    private http: Http
  ) {}

  getItems(){
    return this.http
      .get('assets/data-stories.json')
      .map( res => {
        let parsedResponse = res.json();
        //return res.json();
        return parsedResponse;
      })
//      .catch(this.handleErrorObservable);    
  }

  getBooks(){
    return this.http
      .get('assets/data-books.json')
      .map( res => {
        let parsedResponse = res.json();
        //return res.json();
        return parsedResponse;
      })
//      .catch(this.handleErrorObservable);    
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}