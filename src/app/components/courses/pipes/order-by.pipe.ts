import { Input, Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/model/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses:Course[] ): Course[] {
    courses.sort((firstItem, secondItem) => {
      return secondItem.creationDate.valueOf() - firstItem.creationDate.valueOf()
    });
    return courses;
  }

}
