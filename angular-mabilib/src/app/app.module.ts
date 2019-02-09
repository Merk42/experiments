import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BloomreachService} from './mabilib.service';

//import { ReadStoryComponent } from './read-story/read-story.component';
//import { WriteStoryComponent } from './write-story/write-story.component';

@NgModule({
  declarations: [
//    AppComponent,
//    ReadStoryComponent,
//    WriteStoryComponent
      AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BloomreachService],
  bootstrap: [AppComponent]
})
export class AppModule { }