import { ElementRef, Renderer2 } from '@angular/core';
import { CourseNewLineDirective } from './course-new-line.directive';

describe('CourseNewLineDirective', () => {
  let directive: CourseNewLineDirective;
  const { build, element, renderer } = setup<CourseNewLineDirective>();

  beforeEach(() => {
    jasmine.clock().install();
    directive = build();
  });
  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should highlight  element by green', () => {
    let mockDate = new Date();
    mockDate.setDate(mockDate.getDate() - 1);
    jasmine.clock().mockDate(mockDate);
    directive.course.creationDate = mockDate;
    directive.ngAfterViewInit();

    expect(renderer.setStyle).toHaveBeenCalledWith({}, 'border', '3px solid rgb(0, 255, 0)');
  });

  it('should  highlight element by blue', () => {
    let mockDate = new Date();
    mockDate.setDate(mockDate.getDate() + 30);
    jasmine.clock().mockDate(mockDate);
    directive.course.creationDate = mockDate;
    directive.ngAfterViewInit();

    expect(renderer.setStyle).toHaveBeenCalledWith({}, 'border', '3px solid rgb(0, 0, 255)');
  });

});

function setup<T>(): { default: () => any; build: () => T;[key: string]: any } {
  const element = { nativeElement: { children: [{}] } } as ElementRef;
  const renderer = { setStyle: jasmine.createSpy('setStyle') } as unknown as Renderer2;
  const builder = {
    renderer,
    element,
    default(): any {
      return builder;
    },
    build(): any {
      return new CourseNewLineDirective(element, renderer);
    }
  };
  return builder;
}
