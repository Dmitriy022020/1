import axios from "axios";
import {Dispatch, RootState} from "../types/common";

export async function filmsService(page: number, year: number) {
  const api_key = '&api_key=19e4bdec1949a727168540afcf0d6538';
  return await axios.get(
    'https://api.themoviedb.org/3/discover/movie?language=ru' +
    '&page=' + page +
    '&primary_release_year=' + year +
    api_key
  )

}

//'&sort_by=primary_release_date.asc' +

export function setLocal() {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const {myFilms} = getState().allFilms
    localStorage.setItem('myFilms', JSON.stringify(myFilms))
    console.log('записано в localStorage', myFilms)
  }
}

/*
  useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('myFilms') || '[]')
      dispatch(addMyFilm(saved))
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('myFilms', JSON.stringify(myFilms))
  }, [myFilms])
*/
