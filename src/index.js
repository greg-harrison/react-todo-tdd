import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import configureStore from './state/store';

const reduxStore = configureStore({});

const RootHtml = () => (
  <Provider store={reduxStore}>
    <App />
  </Provider>
);

render(
  <RootHtml />,
  document.getElementById('root'),
);
