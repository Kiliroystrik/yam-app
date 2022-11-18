import { Component, OnInit } from '@angular/core';
// import { PASTRIES, INGREDIENTS_LISTS } from '../pastrie/pastries/mock-pastries';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  // search(event: Event) {

  //   const recipe = (event.target as HTMLInputElement).value.toLowerCase();

  //   let newFound = PASTRIES.filter((elem) => {
  //     let found = elem.name.toString().toLowerCase().includes(recipe);
  //     return found;
  //   })

  //   console.log(newFound)
  // }
}
