import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Crud from "./components/CRUD";
import "bootstrap/dist/css/bootstrap.min.css"
import {Covid} from "./components/Covid";
import {Json} from "./components/Json";

ReactDOM.render(
  <React.StrictMode>
    <Covid />
  </React.StrictMode>,
  document.getElementById('root')
);
