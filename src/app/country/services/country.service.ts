import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _apiUrl: string = 'https://restcountries.eu/rest/v2/';
  constructor( private http: HttpClient) { }

  searchCountry( query: string ): Observable<Country[]>{
    const url = `${ this._apiUrl }name/${ query }`;
    return this.http.get<Country[]>(url);
  }
  
}
