import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder = '';

  debouncer: Subject<string> = new Subject();
  searchQuery: string = '';

  search() {
    this.onEnter.emit(this.searchQuery);
  };

  keyPushed() {
    this.debouncer.next(this.searchQuery);
  }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe(value => {
      this.onDebounce.emit(value);
    });
  }

}
