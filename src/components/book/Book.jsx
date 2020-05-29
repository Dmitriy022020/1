import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };
  render() {
    const { book } = this.props
    return (
      <div>
        <h3>{book.name}</h3>
        <p className="author">{book.author}</p>
        <p className="genre">{book.genre}</p>
        <Link className="button" to={`/books/${book.id}`}>подробнее</Link>
      </div>
    );
  }
}
export default Book
