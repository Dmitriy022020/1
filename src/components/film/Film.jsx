import React from 'react';
import {Link} from "react-router-dom";

function Film(props) {
  const {film} = props
  return (
    <div>
      <h3>{film.title}</h3>
      <h5>{film.release_date}</h5>
      <button className="button"><Link to={`/films/${film.id}`}>подробнее</Link></button>
      <button className="button">Добавить в My films</button>
    </div>
  )
}

export default Film