import React from 'react';
import themeReducer from './themeReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(themeReducer, applyMiddleware(thunk));

export default store;
