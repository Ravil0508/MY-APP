import {Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef} from '@angular/core';
import { Course } from 'src/app/model/course';
import {CourseListComponent} from "../course-list/course-list.component";
import {FilterPipe} from "../pipes/filter.pipe";
import {ConfirmationService, MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../../services/courses.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { State } from 'src/app/store';
import {Store} from "@ngrx/store";
import {addCourse, editCourse} from "../../../store/store/courses/actions/courses-actions.actions";

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CourseListComponent, FilterPipe, ConfirmationService]
})
export class CourseAddComponent implements OnInit {
  public course: Course = {
    title : "",
    creationDate: new Date(),
    duration: 0,
    description: "",
  };

  id = 0;
  public titleHeader = "Добавление курса";
  public coursesMenu: MenuItem[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private courseService: CoursesService,
              private cdr: ChangeDetectorRef,
              private readonly fb: FormBuilder,
              private store: Store<State>,
  ) {
    console.log("constructor constructor");
    activatedRoute.params.subscribe(params => this.id = params['id']);
    console.log("constructor constructor", this.id);
  }

  public courseAddForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    duration: ['', [Validators.required]],
    creationDate: ['', [Validators.required]],
    author: [[], [Validators.required]],
  });

  public get title(): FormControl {
    return this.courseAddForm.get('title') as FormControl;
  }
  public get description(): FormControl {
    return this.courseAddForm.get('description') as FormControl;
  }

  public get duration(): FormControl {
    return this.courseAddForm.get('duration') as FormControl;
  }

  public get creationDate(): FormControl {
    return this.courseAddForm.get('creationDate')  as FormControl;
  }

  public get author(): FormControl {
    return this.courseAddForm.get('author')  as FormControl;
  }

  ngOnInit(): void {
    this.coursesMenu = [
      { label: ' Курсы', routerLink: '/courses', icon: 'pi pi-home' },
    ]
    if (this.id > 0) {
      this.titleHeader = "Редактирование курса";
      this.courseService.getCourseById(this.id).subscribe(
        (course) => {
          this.coursesMenu.push({ label: course.title });
          this.courseAddForm.patchValue({
            title: course.title,
            description: course.description,
            duration: course.duration,
            creationDate:  new Date(course.creationDate),
            author: course.author
          });
          console.log('this.courseAddForm',this.courseAddForm);
          this.cdr.detectChanges();
        });
    }
    else {
      this.coursesMenu.push({ label: 'Новый курс' });

    }
  }

  cancel(){
    console.log("cancel course")
    this.router.navigate(['/courses']);
  }

  save(){
    let courseForm = this.courseAddForm.value;
    courseForm.id = this.id;
    console.log(this.author.value);

    if (this.id > 0) {
      this.store.dispatch(editCourse({ course: courseForm }));
    }
    else {
      this.store.dispatch(addCourse({ course: courseForm }));
    }
    console.log('this.courseAddForm',this.courseAddForm);
  }

}
