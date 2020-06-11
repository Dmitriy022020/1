import {reducers} from "../stores/reducers";

export type Post = {
  title: string,
  id: number,
  completed: boolean,
}
export type RootState = ReturnType<typeof reducers>