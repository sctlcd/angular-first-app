// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
//
// if (environment.production) {
//   enableProdMode();
// }
//
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import {Component} from '@angular/core';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


class Joke {
  setup: string;
  punchline: string;
  hide: boolean;

  constructor(setup: string, punchline:string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide =!this.hide;
  }
}

let joke = new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)");

// Joke List Component
@Component({
  selector: 'joke-list',
  template: `
<div class="card card-block my-4 py-3 px-3"
      *ngFor="let joke of jokes">
  <h4 class="card-title">{{ joke.setup }}</h4>
  <p class="card-text" [hidden]="joke.hide">{{ joke.punchline }}</p>
  <a class="btn btn-warning mr-auto" (click)="joke.toggle()">Tell Me</a>
</div>
`
})
class JokeListComponent {
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
    ];
  }

}

@NgModule({
  imports: [BrowserModule],
  declarations: [JokeListComponent],
  bootstrap: [JokeListComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
