import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {pageFilm, yearFilm} from "../../stores/actions";

export default function Pages() {
  const page = useSelector(state => state.allFilms.page);
  const dispatch = useDispatch();
  const classes_page = ['page_number'];
  if (page === 1) {
    classes_page.push('back_number')
  }
  return (
    <div>
      <div className="pages">
        <p onClick={() => dispatch(yearFilm(2020))} className="page_number">2020</p>
        <p onClick={() => dispatch(yearFilm(2019))} className="page_number">2019</p>
        <p onClick={() => dispatch(yearFilm(2018))} className="page_number">2018</p>
        <p onClick={() => dispatch(yearFilm(2017))} className="page_number">2017</p>
        <p onClick={() => dispatch(yearFilm(2016))} className="page_number">2016</p>
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