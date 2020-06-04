import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home/Home';
import FilmList from './film/FilmList';
import Details from './book/Details';
import BookList from './book/BookList';
import CommentsList from "./about/CommentsList";
import Overview from "./film/Overview";

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/films' component={Films}/>
    <Route path='/books' component={Books}/>
    <Route path='/about' component={CommentsList}/>
  </Switch>
);

const Films = () => (
  <Switch>
    <Route exact path='/films' component={FilmList}/>
    <Route path='/films/:id' component={Overview}/>
  </Switch>
);

const Books = () => (
  <Switch>
    <Route exact path='/books' component={BookList}/>
    <Route path='/books/:id' component={Details}/>
  </Switch>
);

export default Main