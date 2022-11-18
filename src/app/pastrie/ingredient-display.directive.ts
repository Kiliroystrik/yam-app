import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appIngredientDisplay]'
})
export class IngredientDisplayDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('click') onclick() {

  }

  hideIngredients() {
    this.el.nativeElement.style.visible
  }
}

