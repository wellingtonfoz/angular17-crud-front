import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaslistComponent } from './marcaslist.component';

describe('MarcaslistComponent', () => {
  let component: MarcaslistComponent;
  let fixture: ComponentFixture<MarcaslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcaslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
