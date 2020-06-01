import React, { useEffect, useState } from 'react';
import Film from './Film';
import Loader from '../../Loader'
import '../styles/films.css'


function FilmList() {
    const [films, setFilms] = useState([]);
    const [load, setLoad] = useState(true)
    
    useEffect(() => {
        const page = 66
        const api_key = '&api_key=19e4bdec1949a727168540afcf0d6538&language=ru'
        fetch('https://api.themoviedb.org/3/discover/movie?page=' + page +
            '&release_date=2019'+ api_key)
            .then(response => response.json())
            .then(f => {
                setTimeout(() => {
                    setFilms(f.results)
                    setLoad(false)
                }, 500)
            })
    }, [])
    console.log(films)

    const elem = films.map(
            (film) =>
                <li key={film.id} className="film">
                    <Film film={film}/>
                </li>
        )
        
    return (
        <div className="container">
            <h2>Фильмы</h2>
            <ul className="ul_f">
                {load && <Loader />}
                {elem}
            </ul>
        </div>
    )

};
export default FilmList

