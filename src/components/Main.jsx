import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import FilmList from './film/FilmList';
import Details from './book/Details';
import BookList from './book/BookList';
import About from "./about/About";

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/films' component={Films} />
        <Route path='/books' component={Books} />
        <Route path='/books/details' component={Details} />
        <Route path='/about' component={About} />
    </Switch>
);

const Films = () => (
    <Switch>
        <Route exact path='/films' component={FilmList} />
    </Switch>
);

const Books = () => (
    <Switch>
        <Route exact path='/books' component={BookList}/>
        <Route path='/books/:id' component={Details}/>
    </Switch>
);

export default Main