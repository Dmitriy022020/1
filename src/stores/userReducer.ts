import {EXIT_PROFIL, SIGNIN_PROFIL} from "./types";

interface IState {
  user: string | null
}
const initialState = {
  user: null
}
export const userReducer = (state: IState = initialState, action: any): IState => {
  switch (action.type) {
    case SIGNIN_PROFIL:
      return {...state, user: action.payload}
    case EXIT_PROFIL:
      return {...state, user: null}
    default:
      return state
  }
}