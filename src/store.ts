import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { todolistReducer } from './Reducers/todolistReducer';

export const store = createStore(todolistReducer, applyMiddleware(thunk));