import { Injectable } from '@angular/core';
import { PASTRIES, INGREDIENTS_LISTS } from './pastrie/pastries/mock-pastries';
import { Pastrie } from './pastrie/pastrie';
import { List } from './pastrie/list';

@Injectable({
  providedIn: 'root'
})
export class PastrieService {

  constructor() { }

  getPastries(): Pastrie[] {

    return PASTRIES;
  }

  getPastrie(id: string) {

    let pastrie = PASTRIES.find(pastrie => pastrie.id == id)
    return pastrie;
  }

  getPastrieIngredientsList(pastrieId: string) {
    let ingredientsList: List[] = INGREDIENTS_LISTS;
    let ingredients = ingredientsList.find(list => list.id === pastrieId)?.list || [];
    return ingredients;
  }

  search(pastrieName: string) {
    let pastries = this.getPastries();
    let searchedPastries = pastries.filter((pastries) => {
      let found = pastries.name.toLowerCase().includes((pastrieName).toLowerCase());
      return found;
    })
    return searchedPastries;
  }
}