import {CREATE_POST, FETCH_POST} from "./types";


const initialState = {
    posts: [],
    fetchPosts: [],
}
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat(action.payload)}
        case FETCH_POST:
            return {...state, fetchPosts: action.payload}

        default: return state
    }
}