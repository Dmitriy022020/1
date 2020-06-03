import React, { useContext } from 'react';
import Context from '../../Context'

function Comment({ todo, i, onChange,  }) {
    const { removeTodo } = useContext(Context)
    const classes = []
    const back = ['li_todo']
    if (todo.completed) {
        classes.push('checkbox')
        back.push('background')
    }
    return (
        <li className={back.join(' ')}>
            <span className={classes.join(' ')}>
                <input
                    className="input_todo"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)} />
                <strong>{i + 1} </strong>
                {todo.title}
            </span>
            <span>
                <button className="button_todo" onClick={() => removeTodo(todo.id)}>&times;</button>
            </span>
        </li>
    )
};
export default Comment
