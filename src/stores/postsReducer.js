import {CREATE_POST, REMOVE_POST} from "./types";


const initialState = {
  posts: [],
  page: 1
}
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {...state, posts: state.posts.concat(action.payload)}
    case REMOVE_POST:
      return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
    default:
      return state
  }
}