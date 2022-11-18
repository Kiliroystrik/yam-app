import { Pastrie } from './../pastrie';
import { Component, OnInit, Input } from '@angular/core';
import { PastrieService } from 'src/app/pastrie.service';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {

  @Input() pastrie: Pastrie | undefined;
  ingredients: string[] = [];

  sortRef: string = "default";
  pastrieService: PastrieService;

  constructor(pastrieService: PastrieService) {
    this.pastrieService = pastrieService;
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.pastrie) {

      this.getIngredientList(this.pastrie.id)
    }

  }

  getIngredientList(id: string) {
    this.ingredients = this.pastrieService.getPastrieIngredientsList(id);
  }

  addIngredient(event: Event) {
    const ingredient = (event.target as HTMLInputElement).value;
    this.ingredients.push(ingredient);
  }

  deleteIngredient(ingredientArray: string[]) {
    const indexOfIngredient = this.ingredients.indexOf(ingredientArray[0]);
    this.ingredients.splice(indexOfIngredient, 1);
  }

  hideIngredient() {

  }

  sortIngredients() {
    this.ingredients.sort((a, b) => -1 * a.localeCompare(b))

    switch (this.sortRef) {
      case "default":
        //change to desc
        this.ingredients.sort((a, b) => a.localeCompare(b));
        this.sortRef = 'asc';
        break;
      case "asc":
        //change to desc
        this.ingredients.sort((a, b) => -1 * a.localeCompare(b))
        this.sortRef = 'desc';
        break;
      case "desc":
        //change to asc
        this.ingredients.sort((a, b) => a.localeCompare(b));
        this.sortRef = 'asc';
        break;
    }

  }
}