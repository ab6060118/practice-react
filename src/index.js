import React from 'react';
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import App from './App';
import itemReducer from './reducer/index'
import windowReducer from './reducer/window'

const store = createStore(combineReducers({itemReducer, windowReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
