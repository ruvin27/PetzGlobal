import React, * as react from "react";
import { Link } from "react-router-dom";

// import './register';


export default class ForgotPassword_OTP extends react.Component {
    render() {
        return (
            <div className="auth-inner_page">
          <div className="auth-wrapper_page ">
            <form>
                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label>Enter OTP</label>
                    <input type="Text" className="form-control" placeholder="Enter OTP" />
                </div>    
                <Link to="/password">
                <button type="submit" className="btn btn-primary btn-block">Next</button> 
                </Link>
                <div className='forgot'>
                    <Link to="/forgot_password">Back</Link>
               </div> 
            </form>
           </div>
        </div> 
        );
    }
}
