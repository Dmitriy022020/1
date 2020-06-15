import React, {useState} from 'react';
import './books.css';
import '../film/films.css';
import {useDispatch, useSelector} from "react-redux";
import MyFilm from "./MyFilm";
import {loadLocal} from "../../stores/filmsActions";
import {RootState} from "../../types/common";

interface IProps {
  name: string,
  author: string,
  genre: string,
}

function MyFilmList() {
  const myFilms = useSelector((state: RootState) => state.allFilms.myFilms);
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState('');
  const [state, setState] = useState(false);

  dispatch(loadLocal())

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
    setSort(event.target.value)
  };
  const handleClick = () => {
    setState(!state)
  };
  const nameSearch = (item: IProps): boolean => {
    const valueName = name.toLowerCase();
    if (valueName === '') return true;
    else if (item.name.toLowerCase().includes(valueName)) return true;
    return false
  };
  const authorFilter = (item: IProps): boolean => {
    const valueAuthor = author;
    return valueAuthor === '' || valueAuthor === item.author
  };
  const genreFilter = (item: IProps): boolean => {
    const valueGenre = genre;
    return valueGenre === '' || item.genre === valueGenre
  };
  const listSort = (a: string, b: string) => {
    const value: any = sort;
    if (a[value] > b[value]) return 1;
    if (a[value] < b[value]) return -1;
    return 0
  };
  // @ts-ignore
  const filmsFilter = myFilms.filter(nameSearch).filter(authorFilter).filter(genreFilter).sort(listSort)
  const elem = filmsFilter.map(film =>
    <li key={film.id} className="film">
      <MyFilm film={film}/>
    </li>
  );
  // @ts-ignore
  const authorElem = [...new Set(myFilms.map(item => item.author))].map(
    (author) => <option key={author}>{author}</option>
  );
  // @ts-ignore
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
