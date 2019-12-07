import { UserActions, EUserActions } from '../actions';
import { IUserState, initialUserState } from '../state';

export const userReducers = (state: IUserState = initialUserState, action: UserActions ): IUserState => {
  switch (action) {
    case EUserActions.GetUsersSuccess:
      return {
        ...state,
        users: action.payload,
      };
      
    case EUserActions.GetUserSuccess:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
}
