import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from 'src/app/shared/service/theme.service';
import { SearchLocationService } from './service/seach-location.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLocationComponent implements OnInit {
  iconTheme: { dark: string; light: string };

  constructor(
    private _themeService: ThemeService,
    private _searchLocationService: SearchLocationService
  ) {}

  ngOnInit(): void {
    this.iconTheme = this._themeService.icons;
    this._getLocation();
  }

  changeTheme() {
    this.iconTheme = this._themeService.changeTheme();
  }

  private _getLocation() {
    this._searchLocationService.getLocation();
  }
}
