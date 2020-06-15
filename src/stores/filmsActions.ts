import {filmsService, setLocal} from "./services";
import {ADD_MYFILM, FETCH_FILM, PAGE_FILM, REMOVE_MYFILM, TOTAL_PAGE, YEAR_FILM} from "./types";
import {hideLoader, showLoader} from "./actions";
import {useEffect} from "react";

export function fetchFilms() {
  return async (dispatch: any, getState: any) => {
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

export function totalPage() {
  return async (dispatch: any, getState: any) => {
    const {page, year} = getState().allFilms;
    const resp = await filmsService(page, year);
    dispatch({
      type: TOTAL_PAGE,
      payload: resp.data.total_pages,
    })
  }
}

export function pageFilm(page: number) {
  return (dispatch: any) => {
    dispatch({
      type: PAGE_FILM,
      payload: page,
    })
    dispatch(fetchFilms())
  }
}

export function yearFilm(year: string) {
  return (dispatch: any) => {
    dispatch({
      type: YEAR_FILM,
      payload: year,
    })
    dispatch(pageFilm(1))
    dispatch(fetchFilms())
    console.log(year)
  }
}

export function loadLocal() {
  return (dispatch: any) => {
    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('myFilms') || '[]')
      dispatch({
        type: ADD_MYFILM,
        payload: saved,
      })
    }, [dispatch])
  }
}

export function addMyFilm(film: object) {
  return (dispatch: any) => {
    dispatch({
      type: ADD_MYFILM,
      payload: film,
    })
    dispatch(setLocal())
  }
}

export function removeMyFilm(id: number) {
  return (dispatch: any) => {
    dispatch({
      type: REMOVE_MYFILM,
      payload: id,
    })
    dispatch(setLocal())
  }
}
