import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeModule } from './modules/joke/joke.module';


// App Module
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JokeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
