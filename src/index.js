import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './components/theme';
import Router from './router/Router';
import Auth from './services/auth/Auth';
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}><Theme><Auth><Router/></Auth></Theme></Provider>,
  document.getElementById('root')
);