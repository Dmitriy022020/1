import React from 'react';
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";

const Overview = (props) => {
  const films = useSelector(state => state.allFilms.fetchFilms)
  const film = films.find(film => film.id === Number(props.match.params.id))
  console.log(props.match.params.id)
  return (
    <div className="over container">
      <h3>{film.title}</h3>
      <h5>{film.release_date}</h5>
      <p>{film.overview}</p>
      <strong><Link to='/films'>вернуться к списку</Link></strong>
    </div>
  )
}
export default Overview;
