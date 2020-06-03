import React, { Component } from 'react';
import Book from './Book.jsx';
import books from './data.js';
import './books.css'


class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      author: '',
      genre: '',
      isOpen: false,
      sort: ''
    }
  };
  nameSearchOn = event => {
    this.setState({ name: event.target.value })
  };
  authorSelect = event => {
    this.setState({ author: event.target.value })
  };
  genreSelect = event => {
    this.setState({ genre: event.target.value })
  };
  sortSelect = event => {
    this.setState({ sort: event.target.value })
  };
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };
  render() {
    const { isOpen } = this.state;
    const nameSearch = (item) => {
      const valueName = this.state.name.toLowerCase();
      if (valueName === '') return true;
      else if (item.name.toLowerCase().includes(valueName)) return true
    };
    const authorFilter = (item) => {
      const valueAuthor = this.state.author;
      return valueAuthor === '' || valueAuthor === item.author
    };
    const genreFilter = (item) => {
      const valueGenre = this.state.genre;
      return valueGenre === '' || item.genre === valueGenre
    };
    const listSort = (a, b) => {
      const value = this.state.sort;
      if (a[value] > b[value]) return 1;
      if (a[value] < b[value]) return -1;
      return 0
    };
    const booksFilter = books.filter(nameSearch).filter(authorFilter).filter(genreFilter).sort(listSort)
    const bookElem = booksFilter.map(
      book =>
        <li key={book.id}><Book book={book} /></li>
    );
    const authorElem = [...new Set(books.map(item => item.author))].map(
      (author) => <option key={author}>{author}</option>
    );
    const genreElem = [...new Set(books.map(item => item.genre))].map(
      (genre) => <option key={genre}>{genre}</option>
    );
    const tableFilter = isOpen &&
      <form className='filter'>
        <div>
          <label>Поиск</label>
          <input value={this.state.name} type='text' placeholder="введите наименование" onChange={this.nameSearchOn} />
        </div>
        <div>
          <label>Автор</label>
          <select value={this.state.author} onChange={this.authorSelect}>
            <option value=''>все</option>
            {authorElem}
          </select>
        </div>
        <div>
          <label>Жанр</label>
          <select value={this.state.genre} onChange={this.genreSelect}>
            <option value=''>все</option>
            {genreElem}
          </select>
        </div>
        <div>
          <label>Сортировать</label>
          <select value={this.state.sort} onChange={this.sortSelect}>
            <option value='id'>по умолчанию (id)</option>
            <option value='name'>по названию</option>
            <option value='author'>по автору</option>
          </select>
        </div>
      </form>
    return (
      <div className="list container">
        <h2>Книги</h2>
        <legend>Поиск и фильтр
          <button className="button" onClick={this.handleClick}>
            {isOpen ? 'закрыть' : 'открыть'}
          </button>
        </legend>
        {tableFilter}
        <ul className="ul">
          {bookElem}
        </ul>
      </div>
    );
  };
};

export default BookList
