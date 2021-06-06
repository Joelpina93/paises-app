import { HttpClient, HttpParams } from '@angular/common/http';
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

  searchCapital( query: string ): Observable<Country[]>{
    const url = `${ this._apiUrl }capital/${ query }`;
    return this.http.get<Country[]>(url);
  }

  getCountryByAlpha( id: string ): Observable<Country[]>{
    const url = `${ this._apiUrl }alpha/${ id }`;
    return this.http.get<Country[]>(url);
  }

  getCountriesByRegion( region: string ): Observable<Country[]>{
    const params = new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population')
    const url = `${ this._apiUrl }region/${ region }`;
    return this.http.get<Country[]>(url, {params: params});
  }
  
}
