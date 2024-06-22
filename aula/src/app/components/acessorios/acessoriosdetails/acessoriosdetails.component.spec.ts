import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriosdetailsComponent } from './acessoriosdetails.component';

describe('AcessoriosdetailsComponent', () => {
    let component: AcessoriosdetailsComponent;
    let fixture: ComponentFixture<AcessoriosdetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AcessoriosdetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AcessoriosdetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});