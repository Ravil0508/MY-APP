import {Component, OnInit, Output} from '@angular/core';
import { Course} from "../../../model/course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courses: Course[] = [];

  public ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        title: 'Курс обучению пчеловодству и добычи меда у диких пчел и безумных ос',
        creationDate: '05.08.2023',
        duration: 12,
        description: 'Курс предназначен для любетелей меда, экстрима, а так же для тех кто предпочитает нестандартное лечение академическому, ведь яд пчел и ос необычайно полезен'
    },
      {
        id: 2,
        title: 'Курс по программированию для тех кто хочет стать программистом',
        creationDate: '05.08.2022',
        duration: 18,
        description: 'Обучение происходит онлайн, в случае успешного обучения вы можете получить в оффер в компанию из топ-10'
      },
      {
        id: 3,
        title: 'Курс по шитью, вязанию и любому другому рукоделию',
        creationDate: '05.08.2022',
        duration: 18,
        description: 'У каждого есть бабушка которая умеет вязать, только у 50% процентов есть мама которая умеет вязать, ' +
          'только 10% в возрасте 20-35 умеет вязать или шить. Этот курс - прекрасный способ попасть в 10% избранных.'
      },
      {
        id: 4,
        title: 'Учение дона Хуана',
        creationDate: '05.08.2022',
        duration: 24,
        description: 'Абсолютно новый курс, который позволит Вам считать себя одухотворенным, но ничего не изменит фо факту'
      },
      {
        id: 5,
        title: 'Курсы по плаванию на открытой воде',
        creationDate: '05.08.2022',
        duration: 6,
        description: 'Если вы боитесь открытой воды, сильных течений, воронок и сомов которые в любую секунду могут утащить вас на дно' +
          'то этот курс для вас. За 6 месяцев вы преодолеете все страхи и станете покорителем водной стихии!'
      },
      {
        id: 6,
        title: 'Кулинарные курсы',
        creationDate: '05.08.2022',
        duration: 6,
        description: 'Хорошо готовить - очень круто! Не каждый может похвастать таким умением, но каждый любит вкусно поесть!' +
          'Заставьте всех молить вас приготовить что-нибудь эдакое!'
      },
      {
        id: 7,
        title: 'Курс быстрочтения',
        creationDate: '05.08.2022',
        duration: 12,
        description: 'Много кто умеет быстро печатать, но мало кто умеет быстро читать! Мы научим вас чтению по диагонали' +
          'после нашего курса вы сможете прочитать любую книгу не более чем за сутки!'
      }];
  }

  public loadMore(): void {
    console.log('load more');
  }

  public editCourse(course: Course): void {
    console.log(course.title + " " + course.creationDate + " " + course.description + " " + course.id + " " + course.duration);
  }

  public deleteCourse(course: Course): void {
    console.log(course.id);
  }

  protected readonly Output = Output;
}
