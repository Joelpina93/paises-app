import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  country!: Country;
  constructor(private activatedRoute: ActivatedRoute, private CountryService: CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( (param) => 
        this.CountryService.getCountryByAlpha(param.id)
    ),
    tap(console.log)
   ).subscribe( (country) => this.country = country)
  }
}
