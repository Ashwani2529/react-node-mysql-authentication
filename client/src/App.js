import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Profile from "./component/Profile";
import "./App.css";

const App = () => {
  const [login, setLogin] = useState(true);
  const history = useHistory();
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path={login ? "/profile" : "/login"} component={Profile} />
      </Switch>
    </>
  );
};

export default App;
