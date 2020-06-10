import React, { Component } from 'react';
import './books.css'
import {connect} from "react-redux";
import MyFilm from "./MyFilm";

class MyFilmList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      author: '',
      genre: '',
      isOpen: false,
      sort: '',
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
    const filmsFilter = this.props.myFilms.filter(nameSearch).filter(authorFilter).filter(genreFilter).sort(listSort)
    const elem = filmsFilter.map(film =>
      <li key={film.id} className="film">
        <MyFilm film={film}/>
      </li>
    );
    const authorElem = [...new Set(this.props.myFilms.map(item => item.author))].map(
      (author) => <option key={author}>{author}</option>
    );
    const genreElem = [...new Set(this.props.myFilms.map(item => item.genre))].map(
      (genre) => <option key={genre}>{genre}</option>
    );
    console.log(this.props.myFilms)
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
      <div className="container">
        <h2>Книги</h2>
        <legend>Поиск и фильтр
          <button className="button" onClick={this.handleClick}>
            {isOpen ? 'закрыть' : 'открыть'}
          </button>
        </legend>
        {tableFilter}
        <ul className="ul_f">
          {elem}
        </ul>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  myFilms: state.allFilms.myFilms
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(MyFilmList)
