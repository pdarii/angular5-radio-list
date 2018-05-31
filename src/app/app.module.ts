import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RadioListModule } from './modules/radio-list/radio-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RadioListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
