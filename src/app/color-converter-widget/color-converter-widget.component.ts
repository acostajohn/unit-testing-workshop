/**
 * 1. Should take a "color" input that populates the textfield by default
 * 2. Clicking the button should covert the color to RGB, show it in the corresponding
 *    textbox and also emit it through a "colorConverted" output
 * 3. The component should use the color converter service
 */
import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { ColorConverter } from '../services/color.converter';

@Component({
    selector: 'app-color-converter-widget',
    templateUrl: './color-converter-widget.component.html',
    styleUrls: ['./color-converter-widget.component.scss'],
})
export class ColorConverterWidgetComponent implements OnInit {
    constructor(@Inject(forwardRef(() => ColorConverter)) private colorConverter: ColorConverter) {}

    ngOnInit(): void {}
}
