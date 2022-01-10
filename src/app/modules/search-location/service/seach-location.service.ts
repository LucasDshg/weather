import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICities } from '../interface/cities.interface';

@Injectable()
export class SearchLocationService {
  constructor(private _http: HttpClient) {}

  getAllCities() {
    return this._http.get<{ data: ICities[] }>(
      'https://countriesnow.space/api/v0.1/countries'
    );
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            console.log(
              'Latitude: ' +
                position.coords.latitude +
                'Longitude: ' +
                position.coords.longitude
            );
            console.log(position);
          }
        },
        (error) => console.log(error)
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
