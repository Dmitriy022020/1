import React from 'react';
import {Link} from "react-router-dom";

function Film(props) {
  const {film} = props
  return (
    <div>
      <h3>
        {film.title}
      </h3>
      <h5>{film.release_date}</h5>
      <Link className="button" to={`/films/${film.id}`}>подробнее</Link>
    </div>
  )
}

export default Film