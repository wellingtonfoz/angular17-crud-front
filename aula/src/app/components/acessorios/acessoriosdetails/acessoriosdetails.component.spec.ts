import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriosdetailsComponent } from './acessoriosdetails.component';

describe('AcessoriosdetailsComponent', () => {
  let component: AcessoriosdetailsComponent;
  let fixture: ComponentFixture<AcessoriosdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessoriosdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcessoriosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
