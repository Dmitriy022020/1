import React from "react";
import Post from "./Post";

function FetchPosts({posts}) {
    const elem = posts.map(post => <Post post={post} key={post}/>)
    const load = (
        <div>
            <h5>Постов нет</h5>
            <button className="button">Загрузить</button>
        </div>
    )
    return (
        <div>
            <h3>Загруженные посты</h3>
            {(!posts.length) ? load : elem}
        </div>
    )
}
export default FetchPosts