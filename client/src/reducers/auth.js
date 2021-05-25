import { AUTH_ERROR, AUTH_USER, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        authenticated: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
