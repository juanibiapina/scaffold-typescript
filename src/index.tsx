// external dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return <h1>hello world</h1>
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
