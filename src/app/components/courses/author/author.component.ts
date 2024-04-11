import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import { Author } from 'src/app/model/author';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorComponent implements OnInit {

  @Input() controlForm: any = [];

  val: any;
  authors!: Array<Author>;
  filteredAuthor$!: any;
  targetList: [] = []
  userAction: boolean = false;

  constructor(public coursesService: CoursesService) { }

  filteredAuthor: any[] = [];

  ngOnInit() {
    this.filteredAuthor$ = this.coursesService.getAuthors().pipe(
      tap((author) => this.authors = author)
    );
  }

  filterAuthor(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.authors.length; i++) {
      let author = this.authors[i];
      if (author.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(author);
      }
    }
    this.filteredAuthor = filtered;
  }
  selectAuthor(event: any): void {
    const selectAuthor = [...this.controlForm.value];
    this.controlForm.setValue(selectAuthor);
  }

  deleteAuthor(id: string | number): void {
    this.userAction = true;
    const index = this.controlForm.value.findIndex((author: Author) => author.id === id);
    if (index >= 0) {
      this.controlForm.value.splice(index, 1);
    }
  }
}

