import {EXIT_PROFIL, SIGNIN_PROFIL} from "./types";

const initialState = {
  user: null
}
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_PROFIL:
      return {...state, user: action.payload}
    case EXIT_PROFIL:
      return {...state, user: null}
    default:
      return state
  }
}