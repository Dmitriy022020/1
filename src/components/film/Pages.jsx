import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {pageFilm, yearFilm} from "../../stores/actions";

export default function Pages() {
  const year = useSelector(state => state.allFilms.year);
  const page = useSelector(state => state.allFilms.page);
  const dispatch = useDispatch();
  const classes_page = ['page_number'];
  if (page === 1) {
    classes_page.push('back_number')
  }
  const changeHandler = event => {
    dispatch(yearFilm(event.target.value));
  }
  const arrY = []
  for (let i = 2020; i >= 1900; i--) {
    arrY.push(i)
  }
  console.log(year)
  const options = arrY.map(year => <option key={year}>{year}</option>)
  return (
    <div>
      <div className="pages">
        <form>
          <label>Дата выхода</label>
          <select
            type="number"
            value={year}
            onChange={changeHandler}
            className="page_number">
            {options}
          </select>
        </form>
      </div>
      <div className="pages">
        <p onClick={() => dispatch(pageFilm(page - 1))} className={classes_page.join(' ')}> back </p>
        <p onClick={() => dispatch(pageFilm(1))} className="page_number"> 1 </p>
        <p onClick={() => dispatch(pageFilm(2))} className="page_number"> 2 </p>
        <p onClick={() => dispatch(pageFilm(3))} className="page_number"> 3 </p>
        <p onClick={() => dispatch(pageFilm(page + 1))} className="page_number"> next </p>
      </div>
    </div>
  )
}