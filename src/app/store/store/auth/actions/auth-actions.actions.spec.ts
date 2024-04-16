import * as fromAuthActions from './auth-actions.actions';

describe('loadAuthActionss', () => {
  it('should return an action', () => {
    expect(fromAuthActions.GetCurrentUser().type).toBe('[Auth] GetCurrentUser');
  });
});
