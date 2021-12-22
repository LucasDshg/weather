import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  getTimeText() {
    const time = new Date().getHours();

    if (time <= 12) {
      return 'Good Morning';
    } else if (time > 12 && time <= 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Night';
    }
  }
}
