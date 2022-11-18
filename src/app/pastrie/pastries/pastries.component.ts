import { Pastrie } from './../pastrie';
import { Component, OnInit } from '@angular/core';
import { PastrieService } from "src/app/pastrie.service";
//ingelran#8323
@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {

  titlePage: string = "Page principale : liste des patisseries";
  pastries: Pastrie[];
  selectedPastrie: Pastrie | undefined;
  pastrieService: PastrieService;

  constructor(pastrieService: PastrieService) {
    this.pastrieService = pastrieService;
  }

  ngOnInit(): void {
    this.getPastries();
  }

  getPastries() {
    this.pastries = this.pastrieService.getPastries();
  }

  getPastrie(id: string) {
    this.selectedPastrie = this.pastrieService.getPastrie(id);
  }

  foundPastries(event: any) {
    this.pastries = event;
  }
}