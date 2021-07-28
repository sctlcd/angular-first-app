import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';
import { JokeFormComponent } from './joke-form/joke-form.component';



@NgModule({
  declarations: [
    JokeListComponent,
    JokeComponent,
    JokeFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JokeModule { }
