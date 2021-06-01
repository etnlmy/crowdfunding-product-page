import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './pages/Layout';
import ProductPage from "./pages/ProductPage";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Layout><ProductPage /></Layout>
  </React.StrictMode>,
  document.getElementById("container")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
