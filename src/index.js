import React from 'react';

import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import './index.css';
import App from './App';
import configureStore from './state/store';

const reduxStore = configureStore({});

const RootHtml = () => (
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>
);

render(
  <RootHtml />,
  document.getElementById('root'),
);
