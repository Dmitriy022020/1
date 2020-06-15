import {reducers} from "../stores/reducers";

export type Post = {
  title: string,
  id: number,
  completed: boolean,
}
export type NewPost = {
  title: string,
  id: string,
  completed: boolean,

}
export type Film = {
  title: string,
  id: number,
  release_date: Date,
  overview: string,
}
export type RootState = ReturnType<typeof reducers>