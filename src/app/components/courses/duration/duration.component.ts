import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationComponent implements OnInit {
  @Input() public duration: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

