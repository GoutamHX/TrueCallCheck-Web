import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AnimatePresence mode="wait">
  <BrowserRouter basename="/TrueCallCheck-Web">
    <App />
  </BrowserRouter>
  </AnimatePresence>
);
