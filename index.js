import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginForm from './Login'
import SignUp from './SignUp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Outlet, Link,} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<LoginForm />}>
          
        </Route>
        <Route path="signup" element={<SignUp />} />
      
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
