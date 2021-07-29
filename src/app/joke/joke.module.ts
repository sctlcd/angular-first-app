import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';



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