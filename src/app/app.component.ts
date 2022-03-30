import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { UnsplashService } from './shared/service/unsplash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather';

  constructor(
    private _backgroundService: UnsplashService,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    this._backgroundService
      .getBackground()
      .subscribe((imageUrl) => this._updateBackgroundImage(imageUrl));
  }

  private _updateBackgroundImage = (imageUrl: string) =>
    (this._document.body.style.backgroundImage = `url(${imageUrl})`);
}
