import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourlyComponent } from './hourly.component';
import { AccordionModule } from 'src/app/shared/components/accordion/accordion.module';

@NgModule({
  declarations: [HourlyComponent],
  imports: [CommonModule, AccordionModule],
  exports: [HourlyComponent],
})
export class HourlyModule {}
