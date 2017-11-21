import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux'

import App from './App';
import configureStore from './state/store'

import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);



const RootHtml = () => (
  <ReduxProvider store={reduxStore} >
    <App />
  </ReduxProvider >
)

render(RootHtml, document.getElementById('root'));
