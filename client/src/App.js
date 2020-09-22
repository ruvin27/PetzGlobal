import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/forgot_password";
import ForgotPassword_OTP from "./components/auth/forgot_password3";
import ForgotPassword3 from "./components/auth/forgot_password_otp";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Appointment from './components/dashboard/appointments';
import Schedule from './components/dashboard/schedule';
import Approve_appoinment from './components/dashboard/approve_appoinment';
import Add_Appoinment from './components/dashboard/add_appoinment';
import MyPatients from './components/dashboard/mypatients';
import MyPatientProfile from './components/dashboard/mypatientprofile';
import Add_Prescription from './components/dashboard/add_prescription';
import Prescription from './components/dashboard/history';
import Invoice from './components/dashboard/invoice';
import MyProfile from './components/dashboard/myprofile';
import Notification from './components/dashboard/notifications';
import Certificate from './components/dashboard/addmore_certificate';

import "./App.css";

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
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="auth-wrapper">
              <div className="auth-inner">

              
            {/* <Navbar /> */}
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="/forgot_password" component={ForgotPassword}/>
            <Route path="/password-otp" component={ForgotPassword_OTP}/>
            <Route path="/password" component={ForgotPassword3}/>
            <Route path="/certificate" component={Certificate}/>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/appointments" component={Appointment}/>
              <PrivateRoute exact path="/schedule" component={Schedule}/>
              <PrivateRoute exact path="/approve_appoinment" component={Approve_appoinment}/>
              <PrivateRoute exact path="/add_appoinment" component={Add_Appoinment}/>
              <PrivateRoute exact path="/mypatients" component={MyPatients}/>
              <PrivateRoute exact path="/mypatientprofile/:id" component={MyPatientProfile}/>
              <PrivateRoute exact path="/add_prescription" component={Add_Prescription}/>
              <PrivateRoute exact path="/history" component={Prescription}/>
              <PrivateRoute exact path="/myprofile" component={MyProfile}/>
              <PrivateRoute exact path="/invoice" component={Invoice}/>
              <PrivateRoute exact path="/notifications" component={Notification}/>

            </Switch>
          </div>
          </div>
            </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
