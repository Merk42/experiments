import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalDataService } from 'app/local-data.service';


@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})

export class NewformComponent implements OnInit {
  blankFields = false;
  months = [{
    'value':'01',
    'copy':'Jan'
  },{
    'value':'02',
    'copy':'Feb'
  },{
    'value':'03',
    'copy':'Mar'
  },{
    'value':'04',
    'copy':'Apr'
  },{
    'value':'05',
    'copy':'May'
  },{
    'value':'06',
    'copy':'Jun'
  },{
    'value':'07',
    'copy':'Jul'
  },{
    'value':'08',
    'copy':'Aug'
  },{
    'value':'09',
    'copy':'Sep'
  },{
    'value':'10',
    'copy':'Oct'
  },{
    'value':'11',
    'copy':'Nov'
  },{
    'value':'12',
    'copy':'Dec'
  }];
  days:[{}];
  years = [];
  constructor(private LocalDataService: LocalDataService) { }

  ngOnInit() {
    this.makeYears();
  }
  pushValue(name, year, month, day){

    if( ( name == undefined) ||
    ( year == undefined) ||
    ( month == undefined) ||
    ( day == undefined)  ){
      this.blankFields = true;
    } else {
      this.blankFields = false;
      this.LocalDataService.addNew(name, year, month, day);
      
    }
    
    // console.log(this.month)
  }
  makeYears(){
    let latest = 2018;
    let earliest = latest-90;
    for (earliest; earliest < latest; earliest++){
      // console.log(earliest);
      this.years.unshift(earliest);
    }
  }
 
  onFormSubmit(form: NgForm) {
    console.log('does this run?');
    let userName = form.controls['name'].value;
    console.log('username', userName);
	 /*
    let userName = form.controls['name'].value;
    console.log('username', userName);
    */
	  /*
	  let newUser = new User();
	  newUser.userName = userName;
	  newUser.profile = userProfile;
	  newUser.technologies = userTechnologies;
	  
	  this.userService.createUser(newUser);	
	  
    this.resetForm(form);
    */
   //this.resetForm(form);
	}
}
