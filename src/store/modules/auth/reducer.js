/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case '@auth/LOGIN_REQUEST': {
        draftState.loading = true;
        break;
      }
      case '@auth/LOGIN_SUCCESS': {
        draftState.token = action.payload.token;
        draftState.signed = true;
        draftState.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draftState.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draftState.token = null;
        draftState.signed = false;
        break;
      }
      default:
    }
  });
}
