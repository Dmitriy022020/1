import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {pageFilm, yearFilm} from "../../stores/actions";

export default function Pages() {
  const year = useSelector(state => state.allFilms.year);
  const page = useSelector(state => state.allFilms.page);
  const pastPage = useSelector(state => state.allFilms.pastPage)
  const dispatch = useDispatch();
  const classes_back = ['page_number'];
  const classes_next = ['page_number'];
  if (page === 1) {
    classes_back.push('back_number')
  }
  if (page === pastPage) {
    classes_next.push('back_number')
  }
  const changeHandler = event => {
    dispatch(yearFilm(event.target.value));
  };
  const arrY = [];
  for (let i = 2020; i >= 1900; i--) {
    arrY.push(i)
  }
  const options = arrY.map(
    year => <option key={year}>{year}</option>
  );
  const arrP = [];
  for (let i = 1; i <= pastPage; i++) {
    arrP.push(i)
  }
  const pageList = arrP.map(
    page => <p onClick={() => dispatch(pageFilm(page))} className="page_number" key={page}>{page}</p>
  );
  return (
    <div>
      <div className="pages">
        <form>
          <label>Дата выхода</label>
          <select
            value={year}
            onChange={changeHandler}
            className="page_number">
            {options}
          </select>
        </form>
      </div>
      <div className="pages">
        <p onClick={() => dispatch(pageFilm(page - 1))} className={classes_back.join(' ')}> back </p>
        {pageList}
        <p onClick={() => dispatch(pageFilm(page + 1))} className={classes_next.join(' ')}> next </p>
      </div>
    </div>
  )
}