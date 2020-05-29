import React from 'react';
import { Link } from 'react-router-dom'
import books from './data.js';

const Details = (props) => {
  const book = books.find(book => book.id === props.match.params.id)
  return (
    <div className="details container">
      <p>{book.description}</p>
      <div><Link to='/books'>вернуться к списку</Link></div>
    </div>
  )
}
export default Details;
