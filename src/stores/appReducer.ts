import {SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT} from "./types";
interface IState {
  loading: boolean
  alert: string | null
}
const initialState = {
  loading: false,
  alert: null
}
export const appReducer = (state: IState = initialState, action: any): IState => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {...state, loading: false}
    case SHOW_ALERT:
      return {...state, alert: action.payload}
    case HIDE_ALERT:
      return {...state, alert: null}

    default:
      return state
  }
}