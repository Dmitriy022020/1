import React from 'react';

export default function Post({post}) {
    return (
        <li>
            <h5>
                {post.title}
            </h5>
        </li>
    )
}