import React from 'react';
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";
import {Film, RootState} from "../../types/common";

const Overview = (props: any) => {
  const films = useSelector((state: RootState) => state.allFilms.fetchFilms)
  // @ts-ignore
  const film: Film = films.find(film => film.id === Number(props.match.params.id))
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
