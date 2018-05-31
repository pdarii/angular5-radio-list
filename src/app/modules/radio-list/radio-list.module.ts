import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioListComponent } from './radio-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RadioListComponent],
  exports: [
    RadioListComponent
  ]
})
export class RadioListModule { }
