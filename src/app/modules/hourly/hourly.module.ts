import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourlyComponent } from './hourly.component';

@NgModule({
  declarations: [HourlyComponent],
  imports: [CommonModule],
  exports: [HourlyComponent],
})
export class HourlyModule {}
