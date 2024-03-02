import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB4TrdfvGU2sC6NoW99Lw78Jmwj8SFnmZs",
  authDomain: "coderhouse-react-pf.firebaseapp.com",
  projectId: "coderhouse-react-pf",
  storageBucket: "coderhouse-react-pf.appspot.com",
  messagingSenderId: "923887313343",
  appId: "1:923887313343:web:d25b25d32bcfcae39f010a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
