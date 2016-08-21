import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import App from './containers/app';
import getHello from './middlewares/get-hello';

const createStoreWithMiddleware = applyMiddleware(getHello)(createStore);
const store = createStoreWithMiddleware(reducer);

render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('content'));
