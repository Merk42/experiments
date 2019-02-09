import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LocalDataService {

  constructor(private http: Http) { }
  /*
  https://stackoverflow.com/questions/37541783/how-to-subscribe-an-item-from-localstorage-in-angular-2-and-when-changed-get-va
  */
/*
  getItems(){
    return this.http
      .get('assets/data.json')
      .map( res => {
        let parsedResponse = res.json();
        return parsedResponse;
      })
  }
  */
 debug = false;
 getItems(){
   if (this.debug){
     return [
      {
        "name":"mark curtis",
        "birthdate": "1981"
      }, {
        "name":"abi treut",
        "birthdate": "1983-09-23"
      }, {
        "name":"dunno",
        "birthdate": "09-23"
      }, {
        "name":"b",
        "birthdate": "10-03"
      }, {
        "name":"c",
        "birthdate": "03-28"
      }, {
        "name":"d",
        "birthdate": "06-29"
      }
      ]
   } else {
    let entries = localStorage.getItem('entries');
    if (entries == null) {
      return []
    } else {
      return JSON.parse(entries);
    }
   }
  
 }
  addNew(name, year, month, day){
    /* need to make more details for all options */

    let birthdate = '';
    console.log('inputs:', name, year, month, day)
    console.log('birthdate: ', birthdate);
    if (year !== 0 && year !== '0') {
      console.log('year is not 0: ', birthdate);
      birthdate += year
    }
    if (month !== 0 && month !== '0') {
      console.log('month is not 0: ', birthdate);
      if (year !== 0 && year !== '0') {
        console.log('year is not 0: ', birthdate);
        birthdate += '-' + month;
      } else {
        console.log('year IS 0: ', birthdate);
        birthdate += month;
      }
    }
    if (day !== 0 && day !== '0') {
      console.log('day is not 0: ', birthdate);
      birthdate += '-' + day;
    }
    console.log('birthdate: ', birthdate);
    const entry = {
      'name': name,
      'birthdate': birthdate
    }

    var entries = localStorage.getItem('entries');
    if (entries == null) {
      var container = [];
      container.push(entry)
      var newEntries = JSON.stringify(container);
    } else {
      var parsed = JSON.parse(entries);

      parsed.push(entry);
      var newEntries = JSON.stringify(parsed);
    }
      
    localStorage.setItem('entries', newEntries);


    console.log('localStorage of entries ', localStorage.getItem('entries'));


    /*
    {
    "name":"mark curtis",
    "birthdate": "1981"
}, {
    "name":"abi treut",
    "birthdate": "1983-09-23"
}, {
    "name":"dunno",
    "birthdate": "09-23"
}
    */
  }

}
