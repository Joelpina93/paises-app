import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `li{cursor: pointer}`
  ]
})
export class ByCountryComponent implements OnInit {

  public searchQuery: string = '';
  public error: boolean = false;
  private _countries: Country[] = [];
  public suggestedCountries: Country[] = [];
  public placeholder: string = 'Buscar por pais...'
  public showSuggestion: boolean = false;

  get countries() { return [...this._countries] };
  constructor(private service: CountryService) { }

  ngOnInit(): void {
  }

  search(query: string) {
    this.showSuggestion = false;
    this.searchQuery = query;
    this.error = false;
    console.log(this.searchQuery);
    this.service.searchCountry(this.searchQuery).subscribe(resp => {
      this._countries = resp;
    }, (err) => {
      this.error = true;
    });
  }

  suggestions(query: string) {
    this.showSuggestion = true;
    this.error = false;
    this.searchQuery = query;
    this.service.searchCountry(query).subscribe(
      countries => this.suggestedCountries = countries.slice(0, 5),
      (err) => this.suggestedCountries = []);
  }

  searchSuggestion(query: string) {
    this.showSuggestion = false;
    this.search(query);
  }

}
