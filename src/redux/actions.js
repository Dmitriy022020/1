import {CREATE_POST, FETCH_POST} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}
export function fetchPost() {
    return async dispatch => {
        const page = 50
        const api_key = '&api_key=19e4bdec1949a727168540afcf0d6538&language=ru'
        const response = await fetch(
            'https://api.themoviedb.org/3/discover/movie?page='
            + page +
            '&release_date=2019'
            + api_key
        )
        const json = await response.json()
        dispatch({
            type: FETCH_POST,
            payload: json.results
        })
    }
}