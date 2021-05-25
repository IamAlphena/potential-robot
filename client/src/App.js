import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import { Provider } from "react-redux";
import store from "./store";


import Header from "./components/layout/header";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing"; 
import Register from "./components/auth/register";
import Login from "./components/auth/login";

function App() {
  return (
    <Provider store={store}>
   <Router>
    <Header />
    <Navbar />
    <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
  </Provider>
  );
}

export default App;
