import React from "react";
import PostForm from "./PostForm";
import Posts from "./Posts";
import '../../styles/posts.css'
import About from "./About";

export default function AllPosts() {
    return (
    <div className="container">
        <About/>
        <h2>Посты</h2>
        <PostForm/>
        <div className="all-post">
            <div>
                <Posts/>
            </div>
        </div>
    </div>
    )
}