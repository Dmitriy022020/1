import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from '../pages/home/Home';
import FilmList from '../pages/film/FilmList';
import Overview from "./Overview";
import CommentsList from "../pages/about/CommentsList";
import MyFilmList from "../pages/myFilms/MyFilmList";

const Main = () => (
  <Switch>
    <Route exact path='/home' component={Home}/>
    <Route path='/films' component={Films}/>
    <Route path='/myFilms' component={MyFilms}/>
    <Route path='/about' component={CommentsList}/>
    <Redirect to='/home'/>
  </Switch>
);

const Films = () => (
  <Switch>
    <Route exact path='/films' component={FilmList}/>
    <Route path='/films/:id' component={Overview}/>
  </Switch>
);

const MyFilms = () => (
  <Switch>
    <Route exact path='/myFilms' component={MyFilmList}/>
    <Route path='/myFilms/:id' component={Overview}/>
  </Switch>
);

export default Main