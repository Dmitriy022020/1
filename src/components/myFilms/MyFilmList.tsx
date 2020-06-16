import React, {useEffect, useState} from 'react';
import './myFilms.css';
import '../film/films.css';
import {useDispatch, useSelector} from "react-redux";
import MyFilm from "./MyFilm";
import {loadMyFilms} from "../../stores/filmsActions";
import {TFilm, RootState} from "../../types/common";


function MyFilmList() {
  const myFilms = useSelector((state: RootState) => state.allFilms.myFilms);
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState<'id' | 'title' | 'overview'>('title');
  const [state, setState] = useState(false);

  useEffect(() => {
    dispatch(loadMyFilms())
  }, [dispatch])

  const nameSearchOn = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };
  const authorSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAuthor(event.target.value)
  };
  const genreSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value)
  };
  const sortSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as 'id' | 'title' | 'overview')
  };
  const handleClick = () => {
    setState(!state)
  };
  const nameSearch = (item: TFilm): boolean => {
    const valueName = name.toLowerCase();
    if (valueName === '') return true;
    else if (item.title.toLowerCase().includes(valueName)) return true;
    return false
  };
  const authorFilter = (item: TFilm): boolean => {
    const valueAuthor = author;
    return valueAuthor === '' || valueAuthor === item.title
  };
  const genreFilter = (item: TFilm): boolean => {
    const valueGenre = genre;
    return valueGenre === '' || item.overview === valueGenre
  };
  const listSort = (a: TFilm, b: TFilm) => {
    if (a[sort] > b[sort]) return 1;
    if (a[sort] < b[sort]) return -1;
    return 0
  };
  const filmsFilter = myFilms.filter(nameSearch).filter(authorFilter).filter(genreFilter).sort(listSort)
  const elem = filmsFilter.map(film =>
    <li key={film.id} className="film">
      <MyFilm film={film}/>
    </li>
  );

  function onlyUnique(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }

  const authorElem = myFilms.map(item => item.title).filter(onlyUnique).map(
    (author) => <option key={author}>{author}</option>
  );

  const genreElem = [...new Set(myFilms.map(item => item.overview))].map(
    (genre) => <option key={genre}>{genre}</option>
  );
  const tableFilter = state &&
    <form className='filter'>
      <div>
        <label>Поиск</label>
        <input
          value={name}
          type='text'
          placeholder="введите наименование"
          onChange={nameSearchOn}/>
      </div>
      <div>
        <label>Автор</label>
        <select value={author} onChange={authorSelect}>
          <option value=''>все</option>
          {authorElem}
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
          <option value='id'>по умолчанию (id)</option>
          <option value='title'>по названию</option>
          <option value='overview'>по автору</option>
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
