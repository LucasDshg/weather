import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';


declare type TIcon = { dark: string; light: string };

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly dark = 'dark-theme';
  private readonly light = 'light-theme';

  private _iconTheme: TIcon = {
    dark: 'ri-moon-fill',
    light: 'ri-sun-line',
  };

  constructor(@Inject(DOCUMENT) private _document: Document) {}

	
	public get icons() : TIcon {
		return this._iconTheme
	}

  changeTheme() {
    const isDark = this._getClassTheme(this.dark);
    const isLight = this._getClassTheme(this.light);

    if (isDark) {
      this._document.body.classList.remove(this.dark);
      this._document.body.classList.add(this.light);
      this._changeIcon(this.light);
      return this._iconTheme;
    }

    if (isLight) {
      this._document.body.classList.remove(this.light);
      this._document.body.classList.add(this.dark);
      this._changeIcon(this.dark);
      return this._iconTheme;
    }
  }

  private _changeIcon(theme: string) {
    if (theme === 'dark-theme')
      this._iconTheme = {
        dark: 'ri-sun-fill',
        light: 'ri-moon-line',
      };
    else
      this._iconTheme = {
        dark: 'ri-sun-line',
        light: 'ri-moon-fill',
      };
  }

  private _getClassTheme = (value: string): boolean =>
    this._document.body.classList.contains(value);
}
