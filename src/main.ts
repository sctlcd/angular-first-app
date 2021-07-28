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

import {Component, NgModule, Input} from '@angular/core';
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

// Joke Component
@Component({
  selector: 'joke',
  template: `
  <div class="card card-block my-4 py-3 px-3">
    <h4 class="card-title">{{ data.setup }}</h4>
    <p class="card-text" [hidden]="data.hide">{{ data.punchline }}</p>
    <a class="btn btn-warning mr-auto" (click)="data.toggle()">Tell Me</a>
  </div>
  `
})
class JokeComponent {
  @Input('joke') data!: Joke;
}

// Joke List Component
@Component({
  selector: 'joke-list',
  template: `
<joke *ngFor="let j of jokes" [joke]="j" ></joke>
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

// App Component
@Component({
  selector: 'app',
  template: `
<h1 class="my-5 text-center">Angular First App - Tell me a joke</h1>
<joke-list></joke-list>
`
})
class AppComponent {
}

@NgModule({
  imports: [BrowserModule],
  declarations: [
    JokeComponent,
    JokeListComponent,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
