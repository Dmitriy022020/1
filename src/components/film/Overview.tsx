import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import {RootState} from "../../types/common";
import {RouteComponentProps} from "react-router";

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
  state: string
}

const Overview = (props: IProps) => {
  const backLink = props.location.state
  const films = useSelector((state: RootState) => state.allFilms.fetchFilms)
  const myFilms = useSelector((state: RootState) => state.allFilms.myFilms)
  const genres = useSelector((state: RootState) => state.allFilms.genres);
  const view = (backLink === 'films') ? films : myFilms

  const film = view.find(film => film.id === Number(props.match.params.id))
  if (!film) {
    return (
      <div className="over container">
        <strong>
          <Link to={`/${backLink}`}>
            вернуться к списку
          </Link>
        </strong>
      </div>
    )
  }

  const genr = film.genre_ids.map(
    genreIds => genres.filter(
      genre => genreIds === genre.id).map(
      genre => genre.name
    )
  ).join(', ')

  return (
    <div className="over container">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
          width='300px'
          height='450px'
          alt={film.title}/>
      </div>
      <div className='text'>
        <h3>{film.title}</h3>
        <p>{genr}</p>
        <p>Дата выхода: {film.release_date}</p>
        <p>Рейтинг: {film.vote_average}</p>
        <p>{film.overview}</p>
        <strong>
          <Link to={`/${backLink}`}>
            вернуться к списку
          </Link>
        </strong>
      </div>
    </div>
  )
}

export default Overview;
