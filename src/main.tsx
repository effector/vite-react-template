import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './application';
import './index.css';

const root = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root as HTMLElement
);
