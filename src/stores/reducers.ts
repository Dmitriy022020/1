import {combineReducers} from 'redux';
import {postsReducer} from './post/postsReducer'
import {appReducer} from "./app/appReducer";
import {filmsReducer} from "./film/filmsReducer";
import {userReducer} from "./app/userReducer";

export interface IAction<T = string, R = any> {
  type: T;
  payload: R;
}

export const reducers = combineReducers({
  allFilms: filmsReducer,
  allPosts: postsReducer,
  app: appReducer,
  users: userReducer,
})
