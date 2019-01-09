import { Component, OnInit } from '@angular/core';
import { SpeciesService } from "../../services/species.service";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species: Object;

  constructor(private _speciesService: SpeciesService) { }

  ngOnInit() {
    this._speciesService.getSpecies().subscribe((data) => {
      this.species = data;
      console.log(this.species);
    });
  }

  speciesList() {
    return this._speciesService.getSpecies().subscribe((data) => {
      return data;
    });
  }
}
