import React from 'react';
import Comment from './Comment'
import AddComment from './AddComment';
import './about.css'
import {connect} from "react-redux";

function About({posts}) {
  let setTodos
  function onChange(id) {
    setTodos(posts.map(post => {
      if (post.id === id) {
        post.completed = !post.completed
      }
      return post
    }))
  };
  const postList = (posts.map((post, i) =>
    <Comment
      post={post}
      key={post.id} i={i}
      onChange={onChange}
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
};
const mapStateToProps = state => {
  console.log(state)
  return {
    posts: state.allPosts.posts
  }
}

export default connect(mapStateToProps, null)(About)