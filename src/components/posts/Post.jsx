import React from 'react';

export default function Post({post, index}) {
    return (
        <div>
            <h3>{index + 1}. {post.title}</h3>
        </div>
    )
}