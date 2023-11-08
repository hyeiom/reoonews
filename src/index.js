import { createRoot } from 'react-dom';
import React from 'react';
import App from './App';

const root = createRoot(document.getElementById('root')); // Replace 'root' with the ID of your root HTML element

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

