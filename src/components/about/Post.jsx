import React from 'react';

export default function Post({post}) {
    return (
        <li className='li-post'>
            <h4>
                {post.title}
            </h4>

        </li>
    )
}