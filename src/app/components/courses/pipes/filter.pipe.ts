import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/model/course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], str?: string): Course[] {
    if (str)
    {
      const result  =  courses.filter((item) => item.title.indexOf(str!)>=0);
      console.log('result');
      console.log(result);
      return result;
    }
    else{
      console.log('courses', courses)
      return courses;
    }
  }

}
