import React from "react";
import MyFilmList from "../pages/myFilms/MyFilmList";
import {shallow} from 'enzyme';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "../stores/reducers";
import thunk from "redux-thunk";
import Loader from "../components/loader/Loader";
import {Alert} from "../components/Alert";

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
))

// test('componentMyFilms', () =>{
//   const component = shallow(<Provider store={store}><MyFilmList /></Provider>).dive();
//   expect(component).toMatchSnapshot();
// })

test('loader', () =>{
  const component = shallow(<Loader/>);
  expect(component).toMatchSnapshot();
})
test('alert', () =>{
  const component = shallow(<Alert text='gfgffg'/>);
  expect(component).toMatchSnapshot();
})