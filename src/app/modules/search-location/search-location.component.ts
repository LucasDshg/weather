import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { ThemeService } from 'src/app/shared/service/theme.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLocationComponent implements OnInit {
  iconTheme: { dark: string; light: string };

  constructor(private _themeService: ThemeService) {}

  ngOnInit(): void {
    this.iconTheme = this._themeService.icons;
  }

  changeTheme() {
    this.iconTheme = this._themeService.changeTheme();
  }
}
