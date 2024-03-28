import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-find',
  templateUrl: './not-find.component.html',
  styleUrls: ['./not-find.component.css']
})
export class NotFindComponent {

  constructor (private router: Router ){}

  goToMain(){
    this.router.navigate(['/courses']);
  }
}
