import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit{
  public readonly logoLabel = 'Наши курсы - кладезь вашей мудрости!!!';

  constructor() { }

  ngOnInit(): void {
  }
}
