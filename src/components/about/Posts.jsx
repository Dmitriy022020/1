import React from 'react';
import Post from "./Post";
import {connect} from "react-redux";

const Posts = ({newPosts}) => {
    const elem = newPosts.map(post => <Post post={post} key={post.id}/>)
    return (
        <div className='colomn'>
            <h3>Посты</h3>
            <ul className="ul-post">
                {(!newPosts.length) ? <h5>Постов нет</h5> : elem}
            </ul>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {
        newPosts: state.allPosts.posts
    }
}
export default connect(mapStateToProps, null)(Posts)
