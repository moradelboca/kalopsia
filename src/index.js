import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBDeVH954z2GGI_5AGs1r553vxfxt_l9_I",
  authDomain: "kalopsiaaccesorios.firebaseapp.com",
  projectId: "kalopsiaaccesorios",
  storageBucket: "kalopsiaaccesorios.appspot.com",
  messagingSenderId: "843386033867",
  appId: "1:843386033867:web:560182cf4d30712708ad4e"
};
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <React.StrictMode> 
    <App />
   </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
