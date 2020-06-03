import { combineReducers } from 'redux';
import {postsReducer} from './postsReducer'
import {appReducer} from "./appReducer";
import {filmsReducer} from "./filmsReducer";
import {userReducer} from "./userReducer";

export const reducers = combineReducers({
    allFilms: filmsReducer,
    allPosts: postsReducer,
    app: appReducer,
    users: userReducer,
})