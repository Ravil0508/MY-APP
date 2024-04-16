import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DurationPipe } from 'src/app/components/courses/pipes/duration.pipe';
import { InputNumberModule } from 'primeng/inputnumber';
import { DurationComponent } from './duration.component';
import {FormsModule, NgControl, ReactiveFormsModule} from "@angular/forms";


describe('DurationComponent', () => {
  let component: DurationComponent;
  let fixture: ComponentFixture<DurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNumberModule, FormsModule],
      declarations: [ DurationComponent, DurationPipe ],
      providers: [ NgControl ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
