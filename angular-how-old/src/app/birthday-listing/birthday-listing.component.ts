import { Component, OnInit } from '@angular/core';
import { LocalDataService } from 'app/local-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-birthday-listing',
  templateUrl: './birthday-listing.component.html',
  styleUrls: ['./birthday-listing.component.css']
})
export class BirthdayListingComponent implements OnInit {
  name:string;
  age:number;
  birthdays: [{'name':string, 'birthdate': string, 'output':string}];

  constructor(private LocalDataService: LocalDataService) { }

  ngOnInit() {
    this.name = 'demo';
    this.age = 25;
    this.loadItems();
    
  }
/*
  loadItems(){
	this.LocalDataService.getItems()
      .subscribe(res => {
    this.birthdays = res;
        for (let date of res){
          if (date.birthdate.length == 4){
            const string = parseInt(moment(date.birthdate, "YYYYMMDD").fromNow(true).replace(' years', ''));
            const other = +string-1;
            date.output  = other + " or " + string + " years old";
          } else if (date.birthdate.length == 10) {
            const digits = moment().diff(date.birthdate, 'years',false);
            date.output  = digits + " years old";
          } else {
            const digits = moment("2018" + date.birthdate, "YYYYMMDD").fromNow(true).replace(' years', '');
            date.output  = digits + " till bday";
          }
          
        }
      });
  }
  */

   loadItems(){
    this.birthdays = this.LocalDataService.getItems();
    console.log('bd ', this.birthdays);
          for (let date of this.birthdays){
            if (date.birthdate.length == 4){
              const string = parseInt(moment(date.birthdate, "YYYYMMDD").fromNow(true).replace(' years', ''));
              const other = +string-1;
              date.output  = other + " or " + string + " years old";
            } else if (date.birthdate.length == 10) {
              const digits = moment().diff(date.birthdate, 'years',false);
              date.output  = digits + " years old";
            } else {
              const digits = moment("2018" + date.birthdate, "YYYYMMDD").fromNow(true).replace(' years', '');
              date.output  = digits + " till bday";
            }
            
          }
    }
}
