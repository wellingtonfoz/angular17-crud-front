import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasdetailsComponent } from './marcasdetails.component';

describe('MarcasdetailsComponent', () => {
    let component: MarcasdetailsComponent;
    let fixture: ComponentFixture<MarcasdetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MarcasdetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MarcasdetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});