import { PASTRIES } from './pastrie/pastries/mock-pastries';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-yams';
  searchString = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(event: Event) {

    const recipe = (event.target as HTMLInputElement).value.toLowerCase();

    let newFound = PASTRIES.filter((elem) => {
      let found = elem.name.toString().toLowerCase().includes(recipe);
      return found;
    })

    console.log(newFound)
  }
}
