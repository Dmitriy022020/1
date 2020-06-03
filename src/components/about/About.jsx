import React, { useState } from 'react';
import Comment from './Comment'
import Context from '../../Context'
import AddComment from './AddComment';
import '../../styles/about.css'
import {connect} from "react-redux";

function About() {
    const [todos, setTodos] = useState([]);

    function onChange(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    };
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    };
    function addTodo(title) {
        setTodos(
            todos.concat([{
                title: title,
                id: Date.now(),
                completed: false
            }])
        )
        console.log(todos)
    };
    const todoList = (
        <ul className='ul_todo'>
            {todos.map(
                (todo, i) =>
                  <Comment todo={todo} key={todo.id} i={i} onChange={onChange} />
            )}
        </ul>

    );
    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="container">
                <h2>Комментарии</h2>
                <AddComment addTodo={addTodo} />
                {todos.length ? todoList : <p>Пока нет комментариев...</p>}
            </div>
        </Context.Provider>
    )

};
const mapStateToProps = state => {
    console.log(state)
    return {
        newPosts: state.allPosts.posts
    }
}

export default connect(mapStateToProps, null)(About)