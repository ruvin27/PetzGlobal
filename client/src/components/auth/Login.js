import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import face from '../../assets/face.png';
import google from '../../assets/google.jpg';
import insta from '../../assets/insta.png';
import twitter from '../../assets/twitter.png';
import './forgot_password';
import "./css/login.css";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      

      <div className="auth-inner_page">
          <div className="auth-wrapper_page">
              <form noValidate onSubmit={this.onSubmit}>
                
                <h2 style={{ color:"#661cee"}}>Welcome To PetzGlobal </h2>
                <p></p>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  // className={classnames("", {
                  //   invalid: errors.email || errors.emailnotfound
                  // })}
                  className="form-control" 
                  placeholder="Enter email" 
                  required
                />
                {/* <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span> */}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  // className={classnames("", {
                  //   invalid: errors.password || errors.passwordincorrect
                  // })}
                  className="form-control" 
                  placeholder="Enter password" 
                  required
                />
                {/* <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span> */}
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
                
                <div className='text-center pt-4'>
                    <Link to="/register">Create New Account</Link>
                    <span className="pt-3"> | </span>
                    <Link to="/Forgot_Password">Forgot Password</Link>
                </div>  
               
                <div className='text-center pt-4'>
                <span className="pt-3"> -------------- </span>OR
                <span className="pt-3"> -------------- </span></div>
                <p></p>
                <div className="socials">
        <ul>
        <li><img alt="face" src={face} /></li>
        <li><img alt="google" src={google} /></li>
        <li><img alt="insta" src={insta} /></li>
                <li><img alt="twitter" src={twitter} /></li>
        </ul>
        </div>
                
                

        </form>

        </div>
            </div>     
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
