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

class Prescription extends Component {
  constructor(){
    super()
    this.state = {
      history : []
    }
  }
   onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount(){
    axios.get('http://localhost:5000/api/prescribe')
    .then(res => {
      this.setState({
        history: res.data
      })
    })
    .catch(res =>{
    });
  }
  dataTable(){
        return this.state.history.map((data, i) => {
            return (<ListGroup.Item action variant="primary" className="list_group" key={i}>
                    <h3 style={{ textAlign: "start" }}>{data.medicine} </h3>
                    <h6 style={{ textAlign: "start" }}>Date : {data.date}</h6>
                    <h6 style={{ textAlign: "start" }}>Dosage Amt: {data.dosage}</h6>
                    <h6 style={{ textAlign: "start" }}>Duration : {data.duration}</h6>
                    <h6 style={{ textAlign: "start" }}>Strength : {data.strength}</h6>
                    </ListGroup.Item>);
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
          History
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

Prescription.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Prescription);