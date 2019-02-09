import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-read-story',
  templateUrl: './read-story.component.html',
  styleUrls: ['./read-story.component.css']
})
export class ReadStoryComponent implements OnInit {
  @Input() storyID: number;
  @Input() entryID: number;
  constructor() { }

  ngOnInit() {
  }
  title = 'app works!';
  testStoryArr = [ 
   	"This is a ",
    " story. It is meant to be a ",
    ". I don't know, it's ",
    ".", 
  ]
  testEntryArr = [
    {
      "type":"adjective",
      "entry":"trial"
    },
    {
      "type":"noun",
      "entry":"demo"
    },
    {
      "type":"adjective",
      "entry":"weird"
    }
  ]
	storyArr =[];
	entryArr = [];

	typePartArr = [];
	entryPartArr = [];

storyTitle (storyID){
	return this.allStories[storyID].Title;
}
prepareStory (storyID){
	//this.storyArr = [];
	this.storyArr = this.allStories[storyID].Story.split("##");
	return this.storyArr;
}

prepareEntry(storyID, entryID){
	// this is pushing to the array every time its called! Need to call once and be done with it!

	this.entryArr = [];
	var selectedStory = this.allStories.filter(function(story){
  	return story.id == storyID;
	})
	this.typePartArr = selectedStory[0].Blanks;

	var selectedEntry = this.allEntries.filter(function(entry){
  	return entry.entryID == entryID;
	}) 
	this.entryPartArr = selectedEntry[0].entry;



	for (var b = 0; b < selectedStory[0].Blanks.length; b++) {
		this.entryArr.push({"type" : this.typePartArr[b], "entry" :this.entryPartArr[b]})
	}
	return this.entryArr;
}

  allStories = [
	{
		"id":0,
		"Title":"Demo Story",
		"Story":"This is a ## story. It is meant to be a ##. I don't know, it's ##.",
		"Blanks":[
			"adjective",
			"noun",
			"adjective"
		]
	},
	{
		"id":1,
		"Title":"Demo Story Again",
		"Story":"Another ##. Wonder if this performs ##.",
		"Blanks":[
			"noun",
			"adverb"
		]
	}
]

allEntries = [
	{
		"storyID":0,
		"entryID":0,
		"entry":[
			"trial",
			"demo",
			"weird"
		]
	},
	{
		"storyID":0,
		"entryID":1,
		"entry":[
			"bad",
			"joke",
			"funcational"
		]
	},
	{
		"storyID":1,
		"entryID":2,
		"entry":[
			"example",
			"well"
		]
	}
]
}
