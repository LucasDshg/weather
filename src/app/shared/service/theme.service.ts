import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TIcon, TIconNames } from '../types/icon.types';
import { TTheme } from '../types/theme.types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly dark: TTheme = 'dark-theme';
  private readonly light: TTheme = 'light-theme';
  private _iconTheme: TIcon = {
    light: { moon: 'ri-moon-fill', sun: 'ri-sun-line' },
    dark: { moon: 'ri-moon-line', sun: 'ri-sun-fill' },
  };

  private _iconTheme$ = new BehaviorSubject<TIconNames>(this._iconTheme.light);
  constructor(@Inject(DOCUMENT) private _document: Document) {
    (this._document.body.style as any).backdropFilter =
      'brightness(0.2) blur(6px)';
  }

  public get icons(): Observable<TIconNames> {
    return this._iconTheme$.asObservable();
  }
  private get _classTheme(): TTheme {
    return this._document.body.classList.contains(this.light)
      ? this.light
      : this.dark;
  }

  changeTheme(): void {
    if (this._classTheme === this.dark) {
      this._document.body.classList.remove(this.dark);
      this._document.body.classList.add(this.light);
      (this._document.body.style as any).backdropFilter =
        'brightness(1.5) contrast(0.2) blur(6px)';

      this._iconTheme$.next(this._iconTheme.dark);
    } else {
      this._document.body.classList.remove(this.light);
      this._document.body.classList.add(this.dark);
      (this._document.body.style as any).backdropFilter =
        'brightness(0.2) blur(6px)';

      this._iconTheme$.next(this._iconTheme.light);
    }
  }
}
