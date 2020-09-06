import React from 'react';
import styles from "./Routes.css";

import FormCovid from '../FormCovid/FormCovid';
import Login from '../Login/Login';

import NotFoundPage from '../NotFoundPage/NotFoundPage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";  


function Routes() {


  return (
    <Router>


    

        <Switch>
            <Route exact path="/" component = { Login } />
            <Route path="/form" component = { FormCovid } />
            {/* <Route path="" component={ NotFoundPage } /> */}
            <Route render= {
              () => <h1>page not found</h1> }
            />
        </Switch>

    </Router>
  );
}

export default Routes;





