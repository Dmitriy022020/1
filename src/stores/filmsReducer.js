import {FETCH_FILM} from "./types";

const initialState = {
  fetchFilms: []
}
export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM:
      return {...state, fetchFilms: action.payload}
    default:
      return state
  }
}