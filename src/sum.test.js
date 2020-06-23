const {releaseFilter} = require('./pages/myFilms/MyFilmList')

describe('MyFilm', () => {
  let item
  beforeEach(() => {
    item = {
      release_date: '2020-06-20'
    }
  })
  test('releaseFilter', () =>{
    expect(releaseFilter(item)).toBe(true)
  })
})