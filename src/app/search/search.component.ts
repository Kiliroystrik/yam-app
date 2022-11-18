import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pastrieService: PastrieService;

  @Output() searchedResult: EventEmitter<any> = new EventEmitter();

  constructor(pastrieService: PastrieService) {
    this.pastrieService = pastrieService;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // récupération des données du formulaire
    let input = this.pastrieService.search(form.value['word']);
    this.searchedResult.emit(input);
  }

}
