import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home.js'
import Login from './components/Login.js';
import reportWebVitals from './reportWebVitals';
import { NextUIProvider } from '@nextui-org/react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>

    <NextUIProvider>
      <BrowserRouter>
      <main className="light text-foreground bg-background">
      <Routes>
      <Route path="/" element={<Login />} />

        <Route path="/*" element={<Home />} />
      </Routes>
      </main>

      </BrowserRouter>
  
    </NextUIProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
