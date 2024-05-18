import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosdetailsComponent } from './carrosdetails.component';

describe('CarrosdetailsComponent', () => {
  let component: CarrosdetailsComponent;
  let fixture: ComponentFixture<CarrosdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
