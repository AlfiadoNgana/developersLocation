import dotenv from 'dotenv';
import './config/ReactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import 'font-awesome/css/font-awesome.css';
import './style.css';

dotenv.config();

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
