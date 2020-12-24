import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicControlsComponent } from './dynamic-controls.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [DynamicControlsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule
  ],
  exports: [DynamicControlsComponent]
})
export class DynamicControlsModule { }
