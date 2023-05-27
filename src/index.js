import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDiI8QTGN1XwkgQ9z3BoWdFmBcnuTs2CZs",
  authDomain: "shorturl-demo-c9902.firebaseapp.com",
  projectId: "shorturl-demo-c9902",
  storageBucket: "shorturl-demo-c9902.appspot.com",
  messagingSenderId: "970781321516",
  appId: "1:970781321516:web:23160f7b44484b741b2489",
  measurementId: "G-HPYJS4Z0CH"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
