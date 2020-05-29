import React, { useState } from 'react';
import { connect } from 'react-redux';
import {createPost} from '../../redux/actions'

function PostForm({addPost}) {
    const [value, setValue] = useState([])

    function submitHandler(event) {
        event.preventDefault()
        createPost(value)
        setValue('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Заголовок</label>
                <input
                    id="title"
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)} />
            </div>
            <button className="button" type="submit">Создать</button>
        </form>
    )
}
const mapDispatchToProps = {
    createPost
}
export default connect(null, mapDispatchToProps)(PostForm)