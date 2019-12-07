import { ConfigActions, EConfigActions } from '../actions';
import { IConfigState, initialConfigState } from '../state';

export const configReducers = (state: IConfigState = initialConfigState, action: ConfigActions ): IConfigState => {
  switch (action) {
    case EConfigActions.GetConfigSuccess:
      return {
        ...state,
        config: action.payload,
      };

    default:
      return state;
  }
}
