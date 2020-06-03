import {CHANGE_POST, CREATE_POST, REMOVE_POST} from "./types";

const initialState = {
  posts: [],
};
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {...state, posts: state.posts.concat(action.payload)}
    case REMOVE_POST:
      return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
    case CHANGE_POST:
      return {
        ...state, posts: state.posts.map(post => {
          if (post.id === action.payload) {
            post.completed = !post.completed
          }
          return post
        })
      }
    default:
      return state
  }
};
