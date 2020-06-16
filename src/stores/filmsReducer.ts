import {ADD_MYFILM, FETCH_FILM, LOAD_MYFILM, PAGE_FILM, REMOVE_MYFILM, TOTAL_PAGE, YEAR_FILM} from "./types";
import {TFilm} from "../types/common";
import {IAction} from "./reducers";

interface IState {
  fetchFilms: TFilm[]
  page: number,
  year: number,
  pastPage: number,
  myFilms: TFilm[],
}
const initialState = {
  fetchFilms: [],
  page: 1,
  year: 2020,
  pastPage: 1,
  myFilms: [],
}
export const filmsReducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case FETCH_FILM:
      return {...state, fetchFilms: action.payload}
    case PAGE_FILM:
      return {...state, page: action.payload}
    case YEAR_FILM:
      return {...state, year: action.payload}
    case TOTAL_PAGE:
      return {...state, pastPage: action.payload}
    case ADD_MYFILM:
      return {...state, myFilms: state.myFilms.concat(action.payload)}
    case REMOVE_MYFILM:
      return {...state, myFilms: state.myFilms.filter(film => film.id !== action.payload)}
    case LOAD_MYFILM:
      return {...state, myFilms: action.payload}
    default:
      return state
  }
}
