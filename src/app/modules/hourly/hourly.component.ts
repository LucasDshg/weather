import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HourlyComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
