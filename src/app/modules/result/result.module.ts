import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';



@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule
  ],
	exports: [
    ResultComponent
  ],
})
export class ResultModule { }
