import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log();
  }

  generateBreadcrumbs(route: ActivatedRoute) {
    const url = route.snapshot.url.map((segment) => segment.path);

    if (url.length) {
      const label = route.snapshot.data['breadcrumb'] || route.snapshot.data['title'] || 'Home';
    }
  }
}
