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
  const start = (page >= 8) ? (page - 6) : 1;
  const end = (page <= pastPage - 7) ? (page + 7) : pastPage;
  for (let i = start; i <= end; i++) {
    arrP.push(i)
  }
  const pageList = arrP.map(page =>
    <p onClick={() => dispatch(pageFilm(page))}
       className="page_number"
       key={page}
       id={page}
    >
      {page}
    </p>
  );
  const a = pageList.filter(p => p.props.id === page)
  console.log(a)
  return (
    <div>
      <div className="pages">
        <form>
          <label>Дата выхода</label>
          <select
            value={year}
            onChange={changeHandler}
          >
            {options}
          </select>
        </form>
      </div>
      <div className="pages">
        <p onClick={() => dispatch(pageFilm(1))}
           className={classes_back.join(' ')}
        >
          первая
        </p>
        <p onClick={() => dispatch(pageFilm(page - 1))}
           className={classes_back.join(' ')}
        >
          назад
        </p>
        {pageList}
        <p onClick={() => dispatch(pageFilm(page + 1))}
           className={classes_next.join(' ')}
        >
          вперед
        </p>
        <p onClick={() => dispatch(pageFilm(pastPage))}
           className={classes_next.join(' ')}
        >
          последняя
        </p>

      </div>
    </div>
  )
}