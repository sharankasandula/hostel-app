import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-textboxcomponent',
  template: `
  <div class="row">
    <div class="col offset-1 offset-sm-3 offset-md-4 offset-lg-7 offset-xl-8">
      <input type="search" placeholder="Search" [(ngModel)]="filter" autofocus class=" border rounded  form-control" />
    </div>
  </div>
      `
})
export class FilterTextboxcomponentComponent implements OnInit {

  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter); //Raise changed event
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {

  }
}