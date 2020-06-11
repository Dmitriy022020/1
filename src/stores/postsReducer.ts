import {CHANGE_POST, CREATE_POST, REMOVE_POST} from "./types";
import {Post} from "../types/common";
interface IState {
  posts: Post[]
}
const initialState = {
  posts: [],
};
export const postsReducer = (state: IState = initialState, action: any): IState => {
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
