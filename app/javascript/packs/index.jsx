
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from "../components/App";
import { BrowserRouter as Router, Route } from "react-router-dom";


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // <BrowserRouter>
    //   <Route path="/" element={<App />} /> 
    // </BrowserRouter>,
    <App />, document.body.appendChild(document.createElement('div')),
  )
})
