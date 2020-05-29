import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Post from './Post'
import PostForm from './PostForm';

function Posts() {
    const [newPosts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(responce => responce.json())
            .then(p => setPosts(p))
    }, [])
    function addPost(title) {
        setPosts(
            newPosts.concat([{
                title: title,
                id: Date.now().toString(),
            }]))
    }

    const postElem = newPosts.map((post, index) =>
        <li key={post.id}>
            <Post post={post} index={index} />
        </li>)
    return (
        <div>
            <h2>Посты</h2>
            <PostForm addPost={addPost} />
            <ul>
                {postElem}
            </ul>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        newPosts: state.posts.posts
    }
}
export default connect(mapStateToProps, null)(Posts)