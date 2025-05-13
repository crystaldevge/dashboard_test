import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const mount = (el) => {
    const root = ReactDOM.createRoot(el);
    root.render(<App />);
  };
  
  // Only for standalone
  if (process.env.NODE_ENV  === 'development') {
    const el = document.getElementById('dashboard-root');
    if (el) mount(el);
  }
  
  export { mount };