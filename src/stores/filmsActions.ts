import {filmsService, genreService, setLocal} from "./services";
import {
  ADD_MYFILM,
  FETCH_FILM,
  FETCH_GENRE,
  LOAD_MYFILM,
  PAGE_FILM,
  REMOVE_MYFILM,
  TOTAL_PAGE,
  YEAR_FILM
} from "./types";
import {hideLoader, showLoader} from "./appActions";
import {Dispatch, TFilm, RootState} from "../types/common";

export function fetchFilms() {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const {page, year} = getState().allFilms;
    dispatch(showLoader());
    const response = await filmsService(page, year);
    dispatch({
      type: FETCH_FILM,
      payload: response.data.results,
    })
    dispatch(hideLoader());
    dispatch(totalPage());
  }
}
export function genreList() {
  return async (dispatch: Dispatch) => {
    const genres = await genreService();
    dispatch({
      type: FETCH_GENRE,
      payload: genres.data.genres
    })
  }
}
export function totalPage() {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const {page, year} = getState().allFilms;
    const resp = await filmsService(page, year);
    dispatch({
      type: TOTAL_PAGE,
      payload: resp.data.total_pages,
    })
  }
}

export function pageFilm(page: number) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: PAGE_FILM,
      payload: page,
    })
    dispatch(fetchFilms())
  }
}

export function yearFilm(year: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: YEAR_FILM,
      payload: year,
    })
    dispatch(pageFilm(1))
    dispatch(fetchFilms())
    console.log(year)
  }
}

export function loadMyFilms() {
  return (dispatch: Dispatch) => {
    const saved = JSON.parse(localStorage.getItem('myFilms') || '[]')
    dispatch({
      type: LOAD_MYFILM,
      payload: saved,
    })
    console.log('пришло из localStorage', saved)
  }
}

export function addMyFilm(film: TFilm) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_MYFILM,
      payload: film,
    })
    dispatch(setLocal())
  }
}

export function removeMyFilm(id: number) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: REMOVE_MYFILM,
      payload: id,
    })
    dispatch(setLocal())
  }
}
