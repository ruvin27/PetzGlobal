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
export class MyPatients extends Component {
  state = {
    patients : []
  }
   onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount(){
    axios.get('http://localhost:5000/api/patients')
    .then(res => {
      this.setState({
        patients : res.data
      })
    })
    .catch(res =>{
      console.log(res)
    });
  }
  onClick = (res) => {
    console.log(res)
  } 
  data(){
    return this.state.patients.map((data,i) => {
        return (<Link to ='/mypatientprofile'>
            <ListGroup.Item action variant="primary" className="list_group" key={i} onClick = {() => this.onClick(data)} >
              <h4 style={{ textAlign: "start" }}>{data.name}</h4>
              <h6 style={{ textAlign: "start" }}>{data.pet}</h6>
            </ListGroup.Item>
            </Link>)
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