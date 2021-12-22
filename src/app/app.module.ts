import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultModule } from './modules/result/result.module';
import { SearchLocationModule } from './modules/search-location/search-location.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SearchLocationModule, ResultModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
