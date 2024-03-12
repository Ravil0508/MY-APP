import {Component, OnInit, Output} from '@angular/core';
import { Course} from "../../../model/course";
import {ConfirmationService, MenuItem} from "primeng/api";
import {FilterPipe} from "../pipes/filter.pipe";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [ FilterPipe,  ConfirmationService ]
})
export class CourseListComponent implements OnInit {
  public courses: Course[] = [];
  public coursesMenu: MenuItem[] = [];
  public data: Course[] = [];
  searchValue: string = "";
  show: boolean = true;

  constructor(
    private confirmationService: ConfirmationService,
    private filter: FilterPipe
  ) {

  }

  public gOnChanges(){
    console.log('gOnChanges');
  }
  public ngDoCheck(){
    console.log('ngDoCheck');
  }
  public ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  public ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  public ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  public ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  public ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  public ngOnInit(): void {
    this.coursesMenu = [
      {label:'Курсы'}
    ];

    this.courses = [
      {
        id: 1,
        title: 'Курс обучению пчеловодству и добычи меда у диких пчел и безумных ос',
        creationDate:  new Date("05.04.2024"),
        duration: 59,
        description: 'Курс предназначен для любетелей меда, экстрима, а так же для тех кто предпочитает нестандартное лечение академическому, ведь яд пчел и ос необычайно полезен',
        topRated: false,
    },
      {
        id: 2,
        title: 'Курс по программированию для тех кто хочет стать программистом',
        creationDate: new Date("03.08.2024"),
        duration: 564,
        description: 'Обучение происходит онлайн, в случае успешного обучения вы можете получить в оффер в компанию из топ-10',
        topRated: false,
      },
      {
        id: 3,
        title: 'Курс по шитью, вязанию и любому другому рукоделию',
        creationDate: new Date("05.08.2022"),
        duration: 123,
        description: 'У каждого есть бабушка которая умеет вязать, только у 50% процентов есть мама которая умеет вязать, ' +
          'только 10% в возрасте 20-35 умеет вязать или шить. Этот курс - прекрасный способ попасть в 10% избранных.',
        topRated: false,
      },
      {
        id: 4,
        title: 'Учение дона Хуана',
        creationDate: new Date("05.08.2022"),
        duration: 24,
        description: 'Абсолютно новый курс, который позволит Вам считать себя одухотворенным, но ничего не изменит фо факту',
        topRated: false,
      },
      {
        id: 5,
        title: 'Курсы по плаванию на открытой воде',
        creationDate: new Date("05.08.2022"),
        duration: 567,
        description: 'Если вы боитесь открытой воды, сильных течений, воронок и сомов которые в любую секунду могут утащить вас на дно' +
          'то этот курс для вас. За 6 месяцев вы преодолеете все страхи и станете покорителем водной стихии!',
        topRated: false,
      },
      {
        id: 6,
        title: 'Кулинарные курсы',
        creationDate: new Date("05.08.2022"),
        duration: 200,
        description: 'Хорошо готовить - очень круто! Не каждый может похвастать таким умением, но каждый любит вкусно поесть!' +
          'Заставьте всех молить вас приготовить что-нибудь эдакое!',
        topRated: false,
      },
      {
        id: 7,
        title: 'Курс быстрочтения',
        creationDate: new Date("11.03.2024"),
        duration: 568,
        description: 'Много кто умеет быстро печатать, но мало кто умеет быстро читать! Мы научим вас чтению по диагонали' +
          ' после нашего курса вы сможете прочитать любую книгу не более чем за сутки!',
        topRated: true,
      }];
    this.data = this.courses;
  }

  public loadCourse(): void{
    console.log("Загрузка курсов");
  }

  public selectCourse(course: Course): void{
    console.log("ID курса " +course.id);
  }

  public searchClick(): void{

    console.log("this.searchValue", this.searchValue);
    this.data = this.filter.transform(this.courses, this.searchValue);
    this.show = this.data.length != 0;
    console.log("this.searchValue", this.data);
  }

  public editCourse(course: Course): void{
    console.log("ID курса " +course.id);
  }

  public deleteCourse(course: Course): void{
    console.log("ID курса " +course.id);
  }

  protected readonly Output = Output;
}
