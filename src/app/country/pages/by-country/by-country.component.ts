import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit {

  public searchQuery: string = '';
  public error : boolean = false;
  private _countries: Country[] = [];

  get countries() {return [...this._countries]};
  constructor(private service: CountryService) { }

  ngOnInit(): void {
  }

  search( query: string ){
    this.searchQuery = query;
    this.error = false;
    console.log(this.searchQuery);
    this.service.searchCountry(this.searchQuery).subscribe( resp => {
      this._countries = resp;
    }, (err) => {
      this.error = true;
    });
  }

}
