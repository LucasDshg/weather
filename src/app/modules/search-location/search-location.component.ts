import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/shared/service/theme.service';
import { TIcon, TIconNames } from 'src/app/shared/types/icon.types';
import { SearchLocationService } from './service/seach-location.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLocationComponent implements OnInit {
  iconTheme$: Observable<TIconNames>;

  constructor(
    private _themeService: ThemeService,
    private _searchLocationService: SearchLocationService
  ) {}

  ngOnInit(): void {
    this.iconTheme$ = this._themeService.icons;
    this._getLocation();
  }

  changeTheme = () => this._themeService.changeTheme();

  private _getLocation() {
    this._searchLocationService.getLocation();
  }
}
