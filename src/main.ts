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

@Component({
  selector: 'joke',
  template: `
    <h1>{{ setup }}</h1>
    <h2>{{ punchline }}</h2>
  `
})
class JokeComponent {
  setup: string;
  punchline: string;

  constructor() {
    this.setup = 'What did the cheese say when it looked in the mirror?';
    this.punchline = 'Halloumi (Hello Me)';
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [JokeComponent],
  bootstrap: [JokeComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
