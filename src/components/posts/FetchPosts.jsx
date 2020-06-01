import React from "react";
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "../../redux/actions";

function FetchPosts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchPosts)
    const elem = posts.map(post => <Post post={post} key={post.id}/>)
    const button = (
        <div>
            <h5>Постов нет</h5>
            <button
                className="button"
                onClick={() => dispatch(fetchPost())}
            >Загрузить</button>
        </div>
    )
    return (
        <div className='colomn'>
            <h3>Загруженные посты</h3>
            <ul className='ul-post'>
                {(!posts.length) ? button : elem}
            </ul>
        </div>
    )
}
export default FetchPosts