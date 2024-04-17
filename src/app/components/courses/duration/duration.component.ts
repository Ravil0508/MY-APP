import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {DurationPipe} from "../pipes/duration.pipe";

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationComponent implements OnInit {
  @Input() public duration: any=[];
  @Output() durationChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  valueDec(event: any) {
    this.durationChange.emit(this.duration);
  }

}

