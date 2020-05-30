import React from 'react';
import Post from "./Post";

function Posts({posts}) {
    const elem = posts.map(post => <Post post={post} key={post}/>)
    return (
        <div>
            <h3>Посты</h3>
            <ul className="post">
                {(!posts.length) ? <h5>Постов нет</h5> : elem}
            </ul>
        </div>
    )
}
export default Posts
