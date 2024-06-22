import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessorioslistComponent } from './acessorioslist.component';

describe('AcessorioslistComponent', () => {
    let component: AcessorioslistComponent;
    let fixture: ComponentFixture<AcessorioslistComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AcessorioslistComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AcessorioslistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});