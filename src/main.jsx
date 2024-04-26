import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBGojPkkC6s2aJTHnf4uSExxZo9iqX-lFY",
  authDomain: "respirator-54ab1.firebaseapp.com",
  databaseURL: "https://respirator-54ab1-default-rtdb.firebaseio.com",
  projectId: "respirator-54ab1",
  storageBucket: "respirator-54ab1.appspot.com",
  messagingSenderId: "125964604290",
  appId: "1:125964604290:web:0a6e3676aa43755fdef59b",
  measurementId: "G-K4Q8R9WF8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
