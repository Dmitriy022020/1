import {
  CHANGE_POST,
  CREATE_POST,
  FETCH_FILM,
  HIDE_ALERT,
  HIDE_LOADER,
  REMOVE_POST,
  SHOW_ALERT,
  SHOW_LOADER
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
  return async dispatch => {
    dispatch(showLoader())
    const page = 2
    const release = 2019
    const api_key = '&api_key=19e4bdec1949a727168540afcf0d6538&language=ru'
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?page=' + page +
      '&release_date=' + release +
      api_key
    )
    const json = await response.json()
    dispatch({
      type: FETCH_FILM,
      payload: json.results,
    })
    dispatch(hideLoader())
  }
}