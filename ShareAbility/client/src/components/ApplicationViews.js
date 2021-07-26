import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Switch, Route, Redirect } from "react-router-dom";


const ApplicationViews = ({ isLoggedIn }) => {
  return (
    <Switch>

        {/* <Route path="/" exact>
          {isLoggedIn ? <QuoteList /> : <Redirect to="/login" />}
        </Route> */}

      <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
    </Switch>
  );
};

export default ApplicationViews;