import { combineReducers } from 'redux';
import {postsReducer} from './postsReducer'
import {appReducer} from "./appReducer";

export const reducers = combineReducers({
    allPosts: postsReducer,
    app: appReducer
})