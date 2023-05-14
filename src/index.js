import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TemaProvider from './mudarTema';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //no caso aq o chindrel vai ser todo o que estiver dentro do app vai receber em seu class name o value de acrodo com o tema que foi passado no provider
  <React.StrictMode>
    <TemaProvider>
      
    <App />
    </TemaProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
