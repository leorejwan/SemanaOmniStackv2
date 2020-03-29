import React from 'react'; //arquivo que o html vai ler
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);
//substitui o html tipo 'root'
