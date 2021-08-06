import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Joke } from '../joke/joke';

// Joke Form Component
@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

}
