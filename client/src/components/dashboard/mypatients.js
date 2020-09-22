import React, { Component } from "react";
import { ListGroup, Navbar } from "react-bootstrap";
import "./css/appointments.css";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Patients} from "./event";

export class MyPatients extends Component {
  _isMounted = false;
  state = {
    patients : []
  }
   onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    this._isMounted = true;
    axios.get('http://localhost:5000/api/patients')
    .then(res => {
      if (this._isMounted) {
      this.setState({
        patients : res.data
      })
    }
    })
    .catch(res =>{
      console.log(res)
    });
  }

  componentWillUnmount = () => {
    this._isMounted = false;
  }

  data(){
    return this.state.patients.map((data,i) => {
        return <Patients obj={data} key={i} />;
    })
  }

  render() {
    return (
      <div>
        <div>
          <Navbar style={{ background: "#201e4d" }}>
          <Link to='/dashboard'>
            <FontAwesomeIcon
              icon={faPaw}
              size="3x"
              style={{ color: "#fff" }}
            ></FontAwesomeIcon>
            <Navbar.Brand
              className="nav_brand"
              style={{ color: "#fff", fontSize: "40px" }}
            >
              PetzGlobal
            </Navbar.Brand>
            </Link>
            <button
              
              onClick={this.onLogoutClick}
              className="btn waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </Navbar>
        </div>

        <h3
          style={{
            background: "#FF3333",
            padding: "15px",
            margin: "auto",
            marginTop: "10px",
            maxWidth: "80%",
          }}
        >
          My Patients
        </h3>

        <div className="appoint_class">
          <ListGroup>
          {this.data()}
            
          </ListGroup>
          
        </div>
      </div>
    );
  }
}

MyPatients.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(MyPatients);