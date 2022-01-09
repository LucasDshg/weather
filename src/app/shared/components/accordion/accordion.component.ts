import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input('open') show: boolean = false;
  @Input('accordionTitle') title: string = undefined;

  @Output('onclick') clickEnvent = new EventEmitter<boolean>(undefined);

  constructor() {}

  ngOnInit(): void {}

  click() {
    this.show = !this.show;
    this.clickEnvent.emit(this.show);
  }
}
