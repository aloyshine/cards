import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSelectComponent } from './cards-select.component';

describe('CardsSelectComponent', () => {
  let component: CardsSelectComponent;
  let fixture: ComponentFixture<CardsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
