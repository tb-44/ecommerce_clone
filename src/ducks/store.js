import { compose, createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

let store = compose(applyMiddleware(), (createStore)(reducer));

export default store;

