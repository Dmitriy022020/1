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
  const film = films.find(film => film.id === Number(props.match.params.id))
  if (!film) {
    return (
      <div>
        <p>Фильм не найден</p>
      </div>
    )
  }
  return (
    <div className="over container">
      <h3>{film.title}</h3>
      <h5>{film.release_date}</h5>
      <p>{film.overview}</p>
      <strong>
        <Link to={`/${backLink}`}>
          вернуться к списку
        </Link>
      </strong>
    </div>
  )
}

export default Overview;
