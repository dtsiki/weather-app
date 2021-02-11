import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <Router basename="/weather-app">
    <App />
  </Router>,
  document.getElementById('app')
);
