import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import  {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      dob: "",
      city: "",
      pincode: "",
      password: "",
      password2: "",
      errors: {},
      address: '',
      gender: "",
      college: "",
      experience: ""
    };
  }

  handleChange = address => {
        this.setState({ address });
      };

  handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
      };
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      dob: this.state.dob,
      gender: this.state.gender,
      address: this.state.address,
      city: this.state.city,
      pincode: this.state.pincode,
      college: this.state.college,
      experience: this.state.experience,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (

      <div className="auth-inner_page">
          <div className="auth-wrapper_page ">
            <form noValidate onSubmit={this.onSubmit} >
              
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Username</label>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  required
                />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
            </div>
            
                
            <div className="form-group">
                <label>Phone Number</label>
                <input 
                onChange={this.onChange}
                value={this.state.phone}
                error={errors.phone}
                id="phone"
                type="text" 
                className="form-control" 
                placeholder="Enter Phone Number" 
                required/>
            </div>

            <div className="form-group">
                    <label>Date Of Birth</label>
                    <input 
                    onChange={this.onChange}
                    value={this.state.dob}
                    error={errors.dob}
                    id="dob"
                    type="date" 
                    className="form-control"
                    placeholder="Enter DOB" 
                    required/>
            </div>

        <div className="form-group">
            <label htmlFor="type" className="font-large">Gender</label>
            <div className="col-sm-15">
            <select 
            className="form-control" 
            id="gender" 
            onChange={this.onChange}
            value={this.state.gender}
            error={errors.gender}
            required>    
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            </div>
        </div>
        
        <div className="form-group">
                <label>Clinic Address</label>
                <textarea id="address" className="form-control" 
                onChange={this.onChange}
                  value={this.state.address}
                  error={errors.address}
                required></textarea> 
        </div>


        <div className="form-group">
        <label>City</label>
                <input 
                onChange={this.onChange}
                value={this.state.city}
                error={errors.city}
                id="city"
                type="text" 
                className="form-control" 
                placeholder="Enter City" 
                required/>
       
            </div>




            
      <div className="form-group">
                <label>PIN Code</label>
                <input 
                onChange={this.onChange}
                value={this.state.pincode}
                error={errors.pincode}
                id="pincode"
                type="text" 
                className="form-control" 
                placeholder="Enter Pincode" 
                required/>
            </div>


        
        <div className="form-group">
                <label>College Name</label>
                <input type="text" className="form-control" placeholder="Enter College Name" 
                onChange={this.onChange}
                  value={this.state.college}
                  error={errors.college}
                  id="college"
                required/>
        </div>

        <div className="form-group">
                <label>Years Of Experience</label>
                <input type="number" className="form-control" placeholder="Years Of Experience" 
                onChange={this.onChange}
                  value={this.state.experience}
                  error={errors.experience}
                  id="experience"
                required/>
        </div>

       
        

        


            <div className="form-group">
                <label>Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  required
                  // className={classnames("", {
                  //   invalid: errors.password
                  // })}
                />
                {/* <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span> */}
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className="form-control"
                  placeholder="Re-Enter password"
                  required
                  // className={classnames("", {
                  //   invalid: errors.password2
                  // })}
                />
                {/* <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span> */}
            </div>

            <button 
            type="submit" 
            className="btn btn-primary btn-block">Sign Up
            </button>
            <div className="forgot-password text-right">
                Already registered <Link to="/">sign in?</Link>
            </div>


        </form>
        </div>
        </div>


    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
