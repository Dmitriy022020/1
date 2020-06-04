import {FETCH_FILM, PAGE_FILM, TOTAL_PAGE, YEAR_FILM} from "./types";

const initialState = {
  fetchFilms: [],
  page: 1,
  year: 2020,
  pastPage: 1,
}
export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM:
      return {...state, fetchFilms: action.payload}
    case PAGE_FILM:
      return {...state, page: action.payload}
    case YEAR_FILM:
      return {...state, year: action.payload}
    case TOTAL_PAGE:
      return {...state, pastPage: action.payload}
    default:
      return state
  }
}
