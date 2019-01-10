import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private _http: HttpClient) { }

  getSpecies() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    console.log("are we here?", environment.GET_SPECIES_URL );
    return this._http.get(environment.GET_SPECIES_URL, httpOptions);
  }
}
