import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const Profil = () => {
  const user = useSelector(state => state.users.user)
  return (
    <Link to='/'>
      <div className="profil">
        <h4>
          {user}
        </h4>
      </div>
    </Link>
  )
}
