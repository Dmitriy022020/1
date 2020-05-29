import React, { useState } from 'react';
import Modal from './Modal';
import About from './About'

function Home() {
    const [login, setLogin] = useState('');

    function addUser(value) {
        setLogin(value)
    };
    const signup =
        <div className='signup'>
            <h3>Авторизуйтесь на сайте</h3>
            <Modal addUser={addUser} />
        </div>
    const user =
        <div className='login'>
            <h3>{login}</h3>
            <button className="button" onClick={() => setLogin('')}>Выйти</button>
        </div>
    return (
        <div className="container">
            <h2>Главная</h2>
            {login ? user : signup}
            <About/>
        </div>
    )
};
export default Home