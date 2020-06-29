import {releaseFilter} from "../pages/myFilms/myFilmUtilite";
import {TFilm} from "../types/common";

describe('MyFilm', () => {
  let item: TFilm
    beforeEach(() => {
    item = {
      release_date: '2020-06-20',
      title: '',
      id: 1,
      overview: 'string',
      vote_average: 0,
      genre_ids: [],
      popularity: 0,
      poster_path: 'string',

    }
  })
  test('releaseFilter', () =>{
    expect(releaseFilter(item, '2000')).toBe(false)
  })
  test('releaseFilter', () =>{
    expect(releaseFilter(item, '2020')).toBe(true)
  })
})
