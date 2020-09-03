import React, { Component } from "react";
import { Link } from "react-router-dom";

// import './';

export default class ForgotPassword extends Component {
    render() {
        return (
            <div className="auth-inner_page">
          <div className="auth-wrapper_page ">
            <form>
                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number" />
                </div>
                <Link to="/password-otp">
                <button type="submit" href="password-otp" className="btn btn-primary btn-block">
                Get OTP</button></Link>
                <div className='forgot'>
                    <Link to="/">Back</Link>
               </div>
            </form>
            </div>
            </div>
        );
    }
}