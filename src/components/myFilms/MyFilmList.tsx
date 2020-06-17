import React, {useEffect, useState} from 'react';
import './myFilms.css';
import '../film/films.css';
import {useDispatch, useSelector} from "react-redux";
import {genreList, loadMyFilms} from "../../stores/filmsActions";
import {TFilm, RootState} from "../../types/common";
import Film from "../film/Film";

type Sort = 'title' | 'release_date' | 'vote_average';

function MyFilmList() {
  const myFilms = useSelector((state: RootState) => state.allFilms.myFilms);
  //const genres = useSelector((state: RootState) => state.allFilms.genres);
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
    const valueAuthor = release;
    return valueAuthor === '' || valueAuthor === item.release_date.toString().slice(0, 4)
  };
  const genreFilter = (item: TFilm): boolean => {
    const valueGenre = genre;
    return valueGenre === '' || item.title === valueGenre
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

  function onlyUnique(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }

  const releaseElem = myFilms.map(
    item => item.release_date.toString().slice(0, 4)).filter(onlyUnique).sort().map(
    date => <option key={date}>{date}</option>
  );
  const genreElem = [...new Set(myFilms.map(item => item.title))].sort().map(
    genre => <option key={genre}>{genre}</option>
  );
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
