import { combineReducers } from 'redux';
import {postsReducer} from './postsReducer'

export const reducer = combineReducers({
    posts: postsReducer
    
})