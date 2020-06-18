import React, {useEffect, useState} from 'react';
import './myFilms.css';
import '../film/films.css';
import {useDispatch, useSelector} from "react-redux";
import {genreList, loadMyFilms} from "../../stores/filmsActions";
import {TFilm, RootState} from "../../types/common";
import Film from "../film/Film";
import {selectGenres, selectRelease} from "../../stores/selectors";

type Sort = 'title' | 'release_date' | 'vote_average';

function MyFilmList() {
  const myFilms = useSelector((state: RootState) => state.allFilms.myFilms);
  const genres = useSelector((state: RootState) => state.allFilms.genres);
  const releaseElem = useSelector(selectRelease)
  const genreElem = useSelector(selectGenres)

  //const user = useSelector((state: RootState) => state.users.user);
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [release, setRelease] = useState('');
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState<Sort>('title');
  const [state, setState] = useState(false);

  useEffect(() => {
    dispatch(loadMyFilms())
    dispatch(genreList())
  }, [dispatch])

  const nameSearchOn = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  };
  const releaseSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRelease(event.target.value)
  };
  const genreSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value)
  };
  const sortSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as Sort)
  };
  const handleClick = () => {
    setState(!state)
  };
  const nameSearch = (item: TFilm): boolean => {
    const valueName = title.toLowerCase();
    if (valueName === '') return true;
    else if (item.title.toLowerCase().includes(valueName)) return true;
    return false
  };
  const releaseFilter = (item: TFilm): boolean => {
    return release === '' || release === item.release_date.toString().slice(0, 4)
  };
  const genreFilter = (item: TFilm): boolean => {
    const g = item.genre_ids.map(
      genreIds => genres.filter(
        genre => genreIds === genre.id).map(
        genre => genre.name
      )
    ).join(', ')
    if (genre === '') return true;
    else {
      if (g.includes(genre)) return true;
    }
    return false
  };
  const listSort = (a: TFilm, b: TFilm) => {
    if (sort === 'vote_average') {
      if (a[sort] > b[sort]) return -1;
      if (a[sort] < b[sort]) return 1;
      return 0
    } else {
      if (a[sort] > b[sort]) return 1;
      if (a[sort] < b[sort]) return -1;
      return 0
    }
  };
  const filmsFilter = myFilms.filter(nameSearch).filter(releaseFilter).filter(genreFilter).sort(listSort)
  const elem = filmsFilter.map(film =>
    <li key={film.id} className="film">
      <Film film={film} stateLink='myFilms'/>
    </li>
  );
  /*
    const genreElem = [...new Set(myFilms.map(item => item.title))].sort().map(
      genre => <option key={genre}>{genre}</option>
    );
  */
  const tableFilter = state &&
    <form className='filter'>
      <div>
        <label>Поиск</label>
        <input
          value={title}
          type='text'
          placeholder="введите наименование"
          onChange={nameSearchOn}/>
      </div>
      <div>
        <label>Год релиза</label>
        <select value={release} onChange={releaseSelect}>
          <option value=''>все</option>
          {releaseElem}
        </select>
      </div>
      <div>
        <label>Жанр</label>
        <select value={genre} onChange={genreSelect}>
          <option value=''>все</option>
          {genreElem}
        </select>
      </div>
      <div>
        <label>Сортировать</label>
        <select value={sort} onChange={sortSelect}>
          <option value='title'>по названию</option>
          <option value='release_date'>по дате релиза</option>
          <option value='vote_average'>по рейтингу</option>
        </select>
      </div>
    </form>
  return (
    <div className="container">
      <h2>Книги</h2>
      <legend>Поиск и фильтр
        <button className="button" onClick={handleClick}>
          {state ? 'закрыть' : 'открыть'}
        </button>
      </legend>
      {tableFilter}
      <ul className="ul_f">
        {elem}
      </ul>
    </div>
  );
}

export default MyFilmList
