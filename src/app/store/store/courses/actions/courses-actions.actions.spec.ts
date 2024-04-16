import * as fromCoursesActions from './courses-actions.actions';

describe('loadCoursesActionss', () => {
  it('should return an action', () => {
    expect(fromCoursesActions.clearCourses().type).toBe('[Courses] Clear Courses State');  });
});
