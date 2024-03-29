import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  resetFilters() {
    console.log('resetFilters');
  }
}
