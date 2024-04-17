import { Course } from "src/app/model/course";
import { initialState, reducer, State } from "./courses-reducer.reducer";
import * as fromCoursesActions from '../actions/courses-actions.actions';


describe('CoursesReducer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  it('should update state on getCourses', () => {
    const expected = { ...initialState, isLoading: true };
    const action = fromCoursesActions.getCourses({});

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should update state on getCoursesSuccess', () => {
    const courses: Course[] = [{ id: 1, title: 'test', creationDate: new Date(), duration: 10, description: 'test' }];
    const prevState = { ...initialState, isLoading: true };
    const expected = { ...initialState, isLoading: false, courses };

    expect(reducer(prevState, fromCoursesActions.getCoursesSuccess({ data: courses }))).toEqual(expected);
  });

  it('should delete a course on deleteCourseSuccess', () => {
    const courses: Course = { id: 1, title: 'test', creationDate: new Date(), duration: 10, description: 'test' };
    const action = fromCoursesActions.deleteCourseSuccess({ courseId: 1 });

    expect(reducer({ ...initialState, courses: [courses] }, action).courses).toEqual([]);
  });

  it('should toggle isLoading to true on deleteCourse', () => {
    const action = fromCoursesActions.deleteCourse({ courseId: 1 });

    expect(reducer(initialState, action).isLoading).toBeTrue;
  });

  it('should turn off loading on deleteCourseSuccess', () => {
    const courses: Course = { id: 1, title: 'test', creationDate: new Date(), duration: 10, description: 'test' };
    const action = fromCoursesActions.deleteCourseSuccess({ courseId: courses.id! });

    expect(reducer({ ...initialState, isLoading: true }, action).isLoading).toBeFalse;
  });

  it('should add a course on addCourseSuccess', () => {
    const courses: Course = { id: 1, title: 'test', creationDate: new Date(), duration: 10, description: 'test' };
    const action = fromCoursesActions.addCourseSuccess({ course: courses });

    expect(reducer(initialState, action).allCourses).toEqual([courses]);
  });

  it('should edit a course on editCourse', () => {
    const courses: Course = { id: 1, title: 'test', creationDate: new Date(), duration: 10, description: 'test' };
    const modifiedCourse = { ...courses, title: 'Testing Title' };
    const action = fromCoursesActions.editCourseSuccess({ course: modifiedCourse });

    expect(reducer({ ...initialState, courses: [courses] }, action).courses).toEqual([modifiedCourse]);
  });


  it('should reset state to initial state on clearCourses ', () => {
    const courses: Course = { id: 1, title: 'test', creationDate: new Date(), duration: 10, description: 'test' };
    const action = fromCoursesActions.clearCourses();
    const modifiedState = { ...initialState, isLoading: true, courses: [courses] };

    expect(reducer(modifiedState, action)).toEqual(initialState);
  });
});
