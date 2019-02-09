import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BirthdayListingComponent } from './birthday-listing/birthday-listing.component';
import { LocalDataService } from './local-data.service';
import { NewformComponent } from './newform/newform.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'view', component: BirthdayListingComponent },
  { path: 'add',      component: NewformComponent },
  { path: '', component: NewformComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BirthdayListingComponent,
    NewformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [LocalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
