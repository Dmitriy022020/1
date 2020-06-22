import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePost, removePost} from "../../stores/app/appActions";
import {Post, RootState} from "../../types/common";

interface IProps {
  post: Post
  i: number
}
function Comment ({post, i}:IProps) {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.users.user)
  const classes = ['li_todo']
  if (post.completed) {
    classes.push('background')
  }
  return (
    <li className={classes.join(' ')}>
      <span>
        <input
          className="input_todo"
          type="checkbox"
          checked={post.completed}
          onChange={() => dispatch(changePost(post.id))}/>
        <strong>{i + 1}. </strong>
        {post.title}
        <i> Автор: {user} </i>
      </span>
      <span>
        <button
          className="button_todo"
          onClick={() => dispatch(removePost(post.id))}>
          &times;
        </button>
      </span>
    </li>
  )
}
export default Comment
