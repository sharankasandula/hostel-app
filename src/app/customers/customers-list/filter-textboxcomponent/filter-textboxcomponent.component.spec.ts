import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTextboxcomponentComponent } from './filter-textboxcomponent.component';

describe('FilterTextboxcomponentComponent', () => {
  let component: FilterTextboxcomponentComponent;
  let fixture: ComponentFixture<FilterTextboxcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTextboxcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTextboxcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
