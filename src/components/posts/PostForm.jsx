import React from 'react';

function PostForm() {
    const submitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={submitHandler}>
            <h3>Напиши пост</h3>
            <div>
                <input
                    type="text"/>
            </div>
            <button className="button" type="submit">Создать</button>
        </form>
    )
}
export default PostForm