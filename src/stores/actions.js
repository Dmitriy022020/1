import {
  CHANGE_POST,
  CREATE_POST,
  EXIT_PROFIL,
  FETCH_FILM,
  HIDE_ALERT,
  HIDE_LOADER,
  PAGE_FILM,
  REMOVE_POST,
  SHOW_ALERT,
  SHOW_LOADER,
  SIGNIN_PROFIL, TOTAL_PAGE,
  YEAR_FILM
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  }
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    payload: id,
  }
}

export function changePost(id) {
  return {
    type: CHANGE_POST,
    payload: id,
  }
}

export function signinProfil(name) {
  return {
    type: SIGNIN_PROFIL,
    payload: name
  }
}

export function exitProfil() {
  return {
    type: EXIT_PROFIL,
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 2000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function fetchFilms() {
  return async (dispatch, getState) => {
    const {page, year} = getState().allFilms;
    dispatch(showLoader())
    const api_key = '&api_key=19e4bdec1949a727168540afcf0d6538'
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?language=ru&page=' + page +
      '&primary_release_year=' + year +
      api_key
    )
    //'&sort_by=primary_release_date.asc' +
    const json = await response.json()
    dispatch({
      type: FETCH_FILM,
      payload: json.results,
    })
    dispatch(hideLoader())
    dispatch(totalPage())
  }
}

export function totalPage() {
  return async (dispatch, getState) => {
    const {page, year} = getState().allFilms;
    const api_key = '&api_key=19e4bdec1949a727168540afcf0d6538'
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?language=ru&page=' + page +
      '&primary_release_year=' + year +
      api_key
    )
    const json = await response.json()
    dispatch({
      type: TOTAL_PAGE,
      payload: json.total_pages,
    })
  }
}

export function pageFilm(page) {
  return dispatch => {
    dispatch({
      type: PAGE_FILM,
      payload: page,
    })
    dispatch(fetchFilms())
  }
}

export function yearFilm(year) {
  return dispatch => {
    dispatch({
      type: YEAR_FILM,
      payload: year,
    })
    dispatch(pageFilm(1))
    dispatch(fetchFilms())
    console.log(year)
  }
}