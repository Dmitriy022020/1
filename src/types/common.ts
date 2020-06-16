import {reducers} from "../stores/reducers";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";

export type Post = {
  title: string,
  id: number,
  completed: boolean,
}
export type TFilm = {
  title: string,
  id: number,
  release_date: Date,
  overview: string,
}
export type RootState = ReturnType<typeof reducers>

export type Dispatch = ThunkDispatch<RootState, null, Action>