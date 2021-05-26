import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";
import { StoreProvider } from "./utils/GlobalState";

import Header from "./components/layout/header";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from './components/Footer';
import SearchPage from "./pages/searchpage";
import MovieDetails from "./pages/detailpage";
import MyList from "./pages/listpage";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <StoreProvider>
    <Provider store={store}>
      <Router>
        <Header />
        <Navbar />
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route path="/details/:id" component={MovieDetails} />
        <Route path="/mylist" component={MyList} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
    </StoreProvider>
  );
}

export default App;
