import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './utils/ContextProvider';
import {BrowserRouter,Routes,Route} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} exact/>
  </Routes>
    
    </BrowserRouter>
    </ContextProvider>
);

