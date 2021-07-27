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


// Joke List Component
@Component({
  selector: 'joke-list',
  template: `
<div class="card card-block my-4 py-3 px-3"
      *ngFor="let joke of jokes">
  <h4 class="card-title">{{ joke.setup }}</h4>
  <p class="card-text" [hidden]="joke.hide">{{ joke.punchline }}</p>
  <a class="btn btn-warning mr-auto" (click)="toggle(joke)">Tell Me</a>
</div>
`
})
class JokeListComponent {
  jokes: any[];

  constructor() {
    this.jokes = [
      {
        setup: "What did the cheese say when it looked in the mirror?",
        punchline: "Hello-Me (Halloumi)",
        hide: true
      },
      {
        setup: "What kind of cheese do you use to disguise a small horse?",
        punchline: "Mask-a-pony (Mascarpone)",
        hide: true
      },
      {
        setup: "A kid threw a lump of cheddar at me",
        punchline: "I thought ‘That’s not very mature’",
        hide: true
      },
    ];
  }

  toggle(joke:any) {
    joke.hide = !joke.hide;
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
