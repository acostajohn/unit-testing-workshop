import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorConverterWidgetComponent } from './color-converter-widget/color-converter-widget.component';
import { ColorInfoComponent } from './color-info/color-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorConverterWidgetComponent,
    ColorInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
