import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeModuleModule } from './joke-module/joke-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JokeModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
