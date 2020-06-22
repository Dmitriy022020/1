import React from 'react';
import Comment from './Comment'
import AddComment from './AddComment';
import './about.css'
import {useSelector} from "react-redux";
import {RootState} from "../../types/common";

function CommentsList() {
  const posts = useSelector((state: RootState) => state.allPosts.posts)
  const postList = (posts.map((post, i: number) =>
    <Comment
      post={post}
      key={post.id}
      i={i}
    />
  ));
  return (
    <div className="container">
      <h2>Комментарии</h2>
      <AddComment/>
      <ul className='ul_todo'>
        {posts.length ? postList : <p>Пока нет комментариев...</p>}
      </ul>
    </div>
  )
}
export default CommentsList