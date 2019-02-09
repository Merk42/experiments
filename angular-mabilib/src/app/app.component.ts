import { Component } from '@angular/core';
import { BloomreachService } from 'app/mabilib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  allStories = [];
  books = []
  ngOnInit() {
	  this.loadBooks();
	this.loadItems();
}
  
  constructor(private bloomreachService: BloomreachService) {}
  loadItems(){
	this.bloomreachService.getItems()
      .subscribe(res => {
		//console.log('resOut:', res);
		this.allStories = res;
      });
  }

  loadBooks(){
	this.bloomreachService.getBooks()
      .subscribe(res => {
		//console.log('resOut:', res);
		this.books = res;
      });
  }

  phase = 0;
  // phase 0, browse, phase 1 write, phase 2, read
  storyID = 0;
	entryID = 0;
	combArr = [];
	storyArr =[];
	entryArr = [];
	selectedStoryBlanks = [];

	selectedStoryLength = 3;
  
  newEntryID  = 3 // find length of allEntries

	public currentlyEnteringIndex: number = 0; // counter to start for next var
  entriesSoFar = [] // array of entries before done and pushing


  //@@@@!!!!! [STORYID] uses INDEX not the ID !!!@@@@@
	makeIt(storyID:number){
		let j = 0;
		let selectedStory = {};
		selectedStory = this.allStories.filter(
		  story => story.id === storyID);
			this.combArr = selectedStory[0].FullStory.split("##");
		//this.combArr = this.allStories[storyID].FullStory.split("##");
		if (this.combArr[0] == ""){
			// something to know if word or adlib is first
		}
		for (j=0;j < this.combArr.length; j++){
			this.storyArr.push(this.combArr[j]);
			this.combArr.splice(j, 1);
		}
		this.selectedStoryBlanks = this.combArr;
	}

	addLib(newLib: string) {
			if (newLib) {
				this.entryArr.push(newLib.trim());
				this.currentlyEnteringIndex+=1;
			}
		}

	readIt(){
		return this.phase = 2;
	}

	storyTitle (storyID){
		//return this.allStories[storyID].Title;

		
		let selectedStory = {};
		selectedStory = this.allStories.filter(
		  story => story.id === storyID);
		  return selectedStory[0].Title;
			
	}

	generateStory(storyArr, entryArr){
		
	}
	reset(){
		this.storyArr =[];
		this.entryArr = [];
		this.currentlyEnteringIndex = 0;
		this.selectedStoryBlanks = [];
		this.phase = 0;
	}
}
