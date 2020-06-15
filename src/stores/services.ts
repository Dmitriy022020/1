import axios from "axios";

export async function filmsService(page: number, year: number) {
  const api_key = '&api_key=19e4bdec1949a727168540afcf0d6538'
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?language=ru' +
    '&page=' + page +
    '&primary_release_year=' + year +
    api_key
  )
  return response
}

export function setLocal() {
  return (dispatch: any, getState: any) => {
    const {myFilms} = getState().allFilms
    localStorage.setItem('myFilms', JSON.stringify(myFilms))
  }
}
//'&sort_by=primary_release_date.asc' +
