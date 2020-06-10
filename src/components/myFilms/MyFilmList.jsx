import React, {useEffect, useState} from 'react';
import './books.css';
import '../film/films.css';
import {useDispatch, useSelector} from "react-redux";
import MyFilm from "./MyFilm";
import {addMyFilm} from "../../stores/actions";

function MyFilmList() {
  const myFilms = useSelector(state => state.allFilms.myFilms);
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState('');
  const [state, setState] = useState(false);

  if (myFilms.length === 0) {
    const saved = JSON.parse(localStorage.getItem('myFilms') || '[]')
    dispatch(addMyFilm(saved))
  }
  useEffect(() => {
    localStorage.setItem('myFilms', JSON.stringify(myFilms))
  }, [myFilms])

  const nameSearchOn = event => {
    setName(event.target.value)
  };
  const authorSelect = event => {
    setAuthor(event.target.value)
  };
  const genreSelect = event => {
    setGenre(event.target.value)
  };
  const sortSelect = event => {
    setSort(event.target.value)
  };
  const handleClick = () => {
    setState(!state)
  };
 // const {isOpen} = state;
  const nameSearch = (item) => {
    const valueName = name.toLowerCase();
    if (valueName === '') return true;
    else if (item.name.toLowerCase().includes(valueName)) return true
  };
  const authorFilter = (item) => {
    const valueAuthor = author;
    return valueAuthor === '' || valueAuthor === item.author
  };
  const genreFilter = (item) => {
    const valueGenre = genre;
    return valueGenre === '' || item.genre === valueGenre
  };
  const listSort = (a, b) => {
    const value = sort;
    if (a[value] > b[value]) return 1;
    if (a[value] < b[value]) return -1;
    return 0
  };
  const filmsFilter = myFilms.filter(nameSearch).filter(authorFilter).filter(genreFilter).sort(listSort)
  const elem = filmsFilter.map(film =>
    <li key={film.id} className="film">
      <MyFilm film={film}/>
    </li>
  );
  const authorElem = [...new Set(myFilms.map(item => item.author))].map(
    (author) => <option key={author}>{author}</option>
  );
  const genreElem = [...new Set(myFilms.map(item => item.genre))].map(
    (genre) => <option key={genre}>{genre}</option>
  );
  console.log(myFilms)
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
          <option value='name'>по названию</option>
          <option value='author'>по автору</option>
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
};

export default MyFilmList
