import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {

  public searchQuery: string = '';
  public error : boolean = false;
  private _countries: Country[] = [];
  public inputBoxMessage:string = 'Por capital...';

  get countries() {return [...this._countries]};
  constructor(private service: CountryService) { }

  ngOnInit(): void {
  }

  search( query: string ){
    this.searchQuery = query;
    this.error = false;
    console.log(this.searchQuery);
    this.service.searchCapital(this.searchQuery).subscribe( resp => {
      this._countries = resp;
    }, (err) => {
      this.error = true;
    });
  }
  
  suggestions(){
    this.error = false;
    //TODO: Sugerencias
  }

}
