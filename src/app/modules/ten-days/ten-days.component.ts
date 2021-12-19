import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ten-days',
  templateUrl: './ten-days.component.html',
  styleUrls: ['./ten-days.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TenDaysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
