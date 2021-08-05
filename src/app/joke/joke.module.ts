import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './components/joke/joke.component';
import { JokeListComponent } from './containers/joke-list/joke-list.component';
import { JokeFormComponent } from './components/joke-form/joke-form.component';



@NgModule({
  declarations: [
    JokeComponent,
    JokeListComponent,
    JokeFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JokeComponent,
    JokeListComponent,
    JokeFormComponent
  ]
})
export class JokeModule { }