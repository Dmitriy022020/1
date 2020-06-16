import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home/Home';
import FilmList from './film/FilmList';
import Overview from "./film/Overview";
import MyFilms from "./myFilms/MyFilmList";
import CommentsList from "./about/CommentsList";

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/films' component={Films}/>
    <Route path='/myFilms' component={MyFilms}/>
    <Route path='/about' component={CommentsList}/>
  </Switch>
);

const Films = () => (
  <Switch>
    <Route exact path='/films' component={FilmList}/>
    <Route path='/films/:id' component={Overview}/>
  </Switch>
);

export default Main