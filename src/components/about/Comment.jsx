import React from 'react';
import {useDispatch} from "react-redux";
import {removePost} from "../../stores/actions";

function Comment({post, i, onChange}) {
  const dispatch = useDispatch()
  const classes = []
  const back = ['li_todo']
  if (post.completed) {
    classes.push('checkbox')
    back.push('background')
  }
  return (
    <li className={back.join(' ')}>
      <span className={classes.join(' ')}>
        <input
          className="input_todo"
          type="checkbox"
          checked={post.completed}
          onChange={() => onChange(post.id)}/>
        <strong>{i + 1} </strong>
        {post.title}
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
};
export default Comment
