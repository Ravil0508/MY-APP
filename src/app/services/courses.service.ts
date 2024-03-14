import { Injectable } from '@angular/core';
import { Course } from 'src/app/model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  coursesNew: Course[]=[];

  constructor() { }

  private courses = [
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

  public getList(): Course[]{
    return this.courses
  }

  public createCourse(course: Course): Course[]{
    return this.courses
  }

  public getItemById(): Course[]{
    return this.courses
  }

  public updateItem(course: Course): Course[]{
    const index = this.courses.findIndex(c => c.id === course.id);

    // Если курс с заданным id найден
    if (index !== -1) {
      // Обновляем свойства курса
      this.courses[index] = {
        ...this.courses[index],
        title: course.title,
        creationDate: course.creationDate,
        duration: course.duration,
        description: course.description,
        topRated: course.topRated!
      };
    }
    return this.courses
  }

  public removeItem(id: number | undefined, data: Course[]): Course[] {
    this.coursesNew = data.filter((item) => {return item.id != id});
    return this.coursesNew;
  }

}
