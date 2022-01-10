import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ACCESS_KEY } from 'src/app/keys/unsplash.key';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private readonly _url = 'https://api.unsplash.com';
  constructor(private _http: HttpClient) {}

  getBackground(location: string = 'Vitória - ES') {
    return this._getCollections().pipe(
      take(1),
      switchMap((collections) => {
        const _collections = collections.results
          .map((item) => item.id)
          .toString();

        return this.getPhoto(location, _collections).pipe(take(1));
      })
    );
  }

  private getPhoto(location: string, collection: string) {
    const params = new HttpParams()
      .set('query', location)
      .set('collections', collection)
      .set('per_page', '1')
      .set('orientation', 'landscape')
      .set('client_id', ACCESS_KEY);

    return this._http
      .get<{ results: { urls: { full: string } }[] }>(
        `${this._url}/search/photos`,
        { params }
      )
      .pipe(map((res) => res.results[0].urls.full));
  }

  private _getCollections() {
    const params = new HttpParams()
      .set('query', 'nature')
      .set('client_id', ACCESS_KEY);

    return this._http.get<{ results: { id: number }[] }>(
      `${this._url}/search/collections`,
      { params }
    );
  }
}
