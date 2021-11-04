import React from 'react';
import ReactDOM from 'react-dom';
import Converter from "./pages/Converter";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Converter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
