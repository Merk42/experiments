import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-story',
  templateUrl: './write-story.component.html',
  styleUrls: ['./write-story.component.css']
})
export class WriteStoryComponent implements OnInit {
  /*
  enteredLib :  string; 
  constructor(enteredLib){ 
    this.enteredLib = enteredLib; 
    
    }
*/


  ngOnInit() {
  }
//need to know length of story with story ID
  selectedStoryLength = 3;
  selectedStoryBlanks = ["adjective",	"noun",	"adjective"];
  newEntryID  = 3 // find length of allEntries

 
 
  public currentlyEnteringIndex: number = 0; // counter to start for next var
  entriesSoFar = [] // array of entries before done and pushing

  nextOne(foo){
    console.log(foo)
    this.currentlyEnteringIndex+=1;
  }




  public counter : number = 0;
    
    increment(){
      this.counter += 1;
    }
    
    decrement(){
      this.counter -= 1;
}
}
