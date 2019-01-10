import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../../services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species: String;

  constructor(private _speciesService: SpeciesService) { }

  ngOnInit() {
    this.speciesList();
  }

  speciesList() {
    return this._speciesService.getSpecies().subscribe((data) => {
      console.log("DATA: ", data);
      this.species = data[0].name;
      return data;
    });
  }
}
