import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Detail from "./detail.js";
import {Router,Route,hashHistory,IndexRoute} from "react-router"
import './index.css';


ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={App}></Route>
		<Route path="/detail" component={Detail}></Route>
	</Router>),
  document.getElementById('root')
);

