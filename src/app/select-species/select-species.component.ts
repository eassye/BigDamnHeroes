import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-species',
  templateUrl: './select-species.component.html',
  styleUrls: ['./select-species.component.css']
})
export class SelectSpeciesComponent implements OnInit {

  constructor() { }
  list = this.speciesList();

  ngOnInit() {
  
  }

  speciesList(){
    return ["Human", "Eldar", "Orks"];
  }
}
