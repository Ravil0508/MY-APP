import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CalendarModule } from 'primeng/calendar';
import { of } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { DurationPipe } from '../pipes/duration.pipe';
import { CourseAddComponent } from './course-add.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {CardModule} from "primeng/card";
import {DurationComponent} from "../duration/duration.component";
import {AuthorComponent} from "../author/author.component";


describe('CourseAddComponent', () => {
  let component: CourseAddComponent;
  let fixture: ComponentFixture<CourseAddComponent>;
  let store: MockStore;
  let coursesService: CoursesService;
  const initialState = { isLoading: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseAddComponent, DurationPipe, DurationComponent, AuthorComponent],
      imports: [ReactiveFormsModule, RouterTestingModule.withRoutes([
        { path: 'courses', component: CourseAddComponent }
      ]), CalendarModule, BreadcrumbModule, CardModule],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: 1 }) } },
        { provide: CourseAddComponent, useValue: {} },
        { provide: CoursesService, useValue: { getCourseById: () => of({}) } },
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    coursesService = TestBed.inject(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form fields and correct value', () => {
    component.courseAddForm.patchValue({
      title: 'title',
      description: 'desc',
      duration: 60,
      creationDate: new Date('2023-10-10'),
      author: []
    });

    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('[data-testid="title"]'));
    const description = fixture.debugElement.query(By.css('[data-testid="description"]'));
    const creationDate = fixture.debugElement.query(By.css('[data-testid="creationDate"]'));
    const duration = fixture.debugElement.query(By.css('[data-testid="duration"]'));
    const author = fixture.debugElement.query(By.css('[data-testid="author"]'));

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
    expect(creationDate).toBeTruthy();
    expect(duration).toBeTruthy();
    expect(author).toBeTruthy();

    expect(component.title.value).toBe('title');
    expect(component.description.value).toBe('desc');
    expect(component.creationDate.value).toEqual(new Date('2023-10-10'));
    expect(component.duration.value).toBe(60);
    expect(component.author.value).toEqual([]);
  });

  it('should submit form', (done) => {
    const form = fixture.debugElement.query(By.css('form'));
    spyOn(component, 'save');
    component.courseAddForm.patchValue({ title: 'title', description: 'desc', duration: 60, creationDate: new Date('2023-10-10'), author: [] });

    form.triggerEventHandler('ngSubmit', null);
    fixture.whenStable().then(() => {
      expect(component.save).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it('should cancel button click', () => {
    spyOn(component, 'cancel').and.callThrough();
    const cancelButton = fixture.debugElement.query(By.css('.cancelButton')).nativeElement;

    cancelButton.click();

    expect(component.cancel).toHaveBeenCalled()
  });

});
