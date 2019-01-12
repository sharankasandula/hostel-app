import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<app-customers></app-customers>`,
  template: `<router-outlet></router-outlet>`,
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
  // title = 'hostel-app-ng';
}
