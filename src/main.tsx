import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './application';
import './index.css';

const root = document.querySelector('#root');

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
