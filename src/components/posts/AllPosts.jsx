import React from "react";
import PostForm from "./PostForm";
import Posts from "./Posts";
import FetchPosts from "./FetchPosts";
import '../styles/posts.css'

export default function AllPosts() {
    const posts = []
    return (
    <div className="container">
        <h2>Посты</h2>
        <PostForm/>
        <div className="all-post">
            <div>
                <Posts/>
            </div>
            <div>
                <FetchPosts posts={posts}/>
            </div>
        </div>
    </div>
    )
}