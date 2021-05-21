import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { queryByCss, queryAllByCss } from '../test-helpers/queryByCss';
import { ColorConverter } from '../services/color.converter';

import { ColorConverterWidgetComponent } from './color-converter-widget.component';

describe('ColorConverterWidgetComponent', () => {
    let component: ColorConverterWidgetComponent;
    let fixture: ComponentFixture<ColorConverterWidgetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ColorConverterWidgetComponent],
            providers: [ColorConverter],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ColorConverterWidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
