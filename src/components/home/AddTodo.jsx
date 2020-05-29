import React, {useState} from 'react';

function AddTodo({addTodo}) {
    const [value, setValue] = useState(' ')

    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()) {
            addTodo(value)
            setValue('')
        }
        console.log(value)
    }
    return (
        <form onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button className="button" type="submit">Добавить</button>
        </form>
    )
};

export default AddTodo