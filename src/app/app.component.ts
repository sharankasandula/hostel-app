import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-customers></app-customers>
    `,
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
  // title = 'hostel-app-ng';
}
