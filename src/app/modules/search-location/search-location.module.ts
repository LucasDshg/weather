import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLocationComponent } from './search-location.component';
import { SearchLocationService } from './service/seach-location.service';

@NgModule({
  declarations: [SearchLocationComponent],
  imports: [CommonModule],
  exports: [SearchLocationComponent],
	providers: [SearchLocationService]
})
export class SearchLocationModule {}
