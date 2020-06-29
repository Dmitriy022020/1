import {SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, CHANGE_LANGUAGE} from "../types";
import {IAction} from "../reducers";

interface IState {
  loading: boolean
  alert: string | null
  language: string
}
const initialState = {
  loading: false,
  alert: null,
  language: 'ru'
}
export const appReducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {...state, loading: false}
    case SHOW_ALERT:
      return {...state, alert: action.payload}
    case HIDE_ALERT:
      return {...state, alert: null}
    case CHANGE_LANGUAGE:
      return {...state, language: action.payload}


    default:
      return state
  }
}