import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {RootState} from "../types/common";
import {exitProfil} from "../stores/appActions";

export const Profil = () => {
  const user = useSelector((state: RootState) => state.users.user)
  const dispatch = useDispatch()
  const elem =
    <div className='exitProfil'>
      <h5 onClick={() => dispatch(exitProfil())}>Выйти</h5>
    </div>

  return (
    <div className="profil profil-drop">
      <Link to='/home'>
        <h5>
          {user}
        </h5>
      </Link>
      {elem}
    </div>
  )
}
