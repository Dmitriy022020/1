import {createSelector} from "reselect";
import {RootState, TGenre} from "../../types/common";
import React from "react";

const selectAllFilm = (state: RootState) => state.allFilms.myFilms;
const selectAllGenres = (state: RootState) => state.allFilms.genres;
export const selectFirstFilm = createSelector(
  selectAllFilm,
  allFilms => allFilms[0]
)

export const selectRatingFilm = createSelector(
  selectAllFilm,
  allFilm => allFilm.sort(
    (a, b) => {
      if (a['vote_average'] > b['vote_average']) return -1;
      if (a['vote_average'] < b['vote_average']) return 1;
      return 0
    }
  )[0]
)

export const selectOldFilm = createSelector(
  selectAllFilm,
  allFilm => allFilm.sort(
    (a, b) => {
      if (a['release_date'] > b['release_date']) return 1;
      if (a['release_date'] < b['release_date']) return -1;
      return 0
    }
  )[0]
)
export const selectPopularity = createSelector(
  selectAllFilm,
  allFilm => allFilm.sort(
    (a, b) => {
      if (a['popularity'] > b['popularity']) return -1;
      if (a['popularity'] < b['popularity']) return 1;
      return 0
    }
  )[0]
)
export const oldPopularitySelector = createSelector(
  [selectPopularity, selectOldFilm],
  (selectOldFilm, selectPopularity) => {
    return (selectPopularity && selectPopularity.title) + ' и ' + (selectOldFilm && selectOldFilm.title)
  }
)
  function onlyUnique(value: string, index: number, self: string[]) {
  return self.indexOf(value) === index;
}

export const selectRelease = createSelector(
  selectAllFilm,
  allFilm => allFilm.map(
    item => item.release_date.toString().slice(0, 4)).filter(onlyUnique).sort().map(
    date => <option key={date}>{date}</option>
  )
)

const genreSort = (a: TGenre, b: TGenre) => {
  if (a["name"] > b["name"]) return 1;
  if (a["name"] < b["name"]) return -1;
  return 0
}

export const selectGenres = createSelector(
  selectAllGenres,
  genre => genre.sort(genreSort).map(
    genre => <option key={genre.id}>{genre.name}</option>
  )
)
