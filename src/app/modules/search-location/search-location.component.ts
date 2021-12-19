import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchLocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
