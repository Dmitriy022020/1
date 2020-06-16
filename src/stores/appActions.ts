import {
  CHANGE_POST,
  CREATE_POST,
  EXIT_PROFIL,
  HIDE_ALERT,
  HIDE_LOADER,
  REMOVE_POST,
  SHOW_ALERT,
  SHOW_LOADER,
  SIGNIN_PROFIL
} from "./types";
import {Dispatch, Post} from "../types/common";

export function createPost(post: Post) {
  return {
    type: CREATE_POST,
    payload: post,
  }
}

export function removePost(id: number) {
  return {
    type: REMOVE_POST,
    payload: id,
  }
}

export function changePost(id: number) {
  return {
    type: CHANGE_POST,
    payload: id,
  }
}

export function signinProfil(name: string) {
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

export function showAlert(text: string) {
  return (dispatch: Dispatch) => {
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

