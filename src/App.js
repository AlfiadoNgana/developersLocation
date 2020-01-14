import dotenv from 'dotenv';
import React from 'react';

import Routes from './routes';

import 'font-awesome/css/font-awesome.css';
import './style.css';

dotenv.config();

const App = () => <Routes></Routes>;

export default App;
