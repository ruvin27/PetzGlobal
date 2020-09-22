import React, { Component } from "react";
import { Navbar, ListGroup} from "react-bootstrap";
import "./css/appointments.css";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Appointments} from "./event";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from 'axios';

export class Schedule extends Component {
  constructor(...args) {
    super(...args)

    this.state = { 
      appointments : []
    }
  }

 
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount = () => {
    axios.get(`http://localhost:5000/api/schedule/${this.props.auth.user.email}`)
    .then(res => {
      this.setState({
        appointments: res.data
      })
    })
    .catch(res =>{
    });
  }
  componentWillUnmount = () => {
    this.setState({
      appointments: []
    });
  }

  dataTable(){
    return this.state.appointments.map((data, i) => {
        return <Appointments obj={data} key={i} />;
    });
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
          background: "#5CD65C",
          padding: "15px",
          margin: "auto",
          marginTop: "10px",
          maxWidth: "80%",
        }}
      >
          Appointments
      </h3>

      <div className="appoint_class">
        <ListGroup>
          {this.dataTable()}
        </ListGroup>
      </div>
    </div>
        
             

      
    );
  }
}


Schedule.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Schedule);
