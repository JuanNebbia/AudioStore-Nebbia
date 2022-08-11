import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApx7S7RbKFp0IwAM0AEwo8Xujb8ctyLGA",
  authDomain: "audiostore-d7fa6.firebaseapp.com",
  projectId: "audiostore-d7fa6",
  storageBucket: "audiostore-d7fa6.appspot.com",
  messagingSenderId: "823056145424",
  appId: "1:823056145424:web:6cc8ad039f7403275cbe95",
  measurementId: "G-PF296X194B"
};

initializeApp(firebaseConfig);



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
