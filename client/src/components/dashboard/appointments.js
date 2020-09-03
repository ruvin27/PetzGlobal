import React, { Component } from "react";
import { ListGroup, Navbar } from "react-bootstrap";
import "./css/appointments.css";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
export class Appointment extends Component {
   onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <div>
        <div>
          <Navbar style={{ background: "#201e4d" }}>
          <Link to="/dashboard">
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
            background: "#FFAE33",
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
          
            <ListGroup.Item action variant="primary" className="list_group">
              <h4 style={{ textAlign: "start" }}>Mr. Shawn Louis</h4>
              <h6 style={{ textAlign: "start" }}>July 5 2020 / 9.00 A.M.</h6>

              <h6 style={{ textAlign: "start" }}>Cat</h6>
            </ListGroup.Item>
            <ListGroup.Item action variant="primary" className="list_group">
              <h4 style={{ textAlign: "start" }}>Mr. Ruvin Rodrigues</h4>
              <h6 style={{ textAlign: "start" }}>July 5 2020 / 10.00 A.M.</h6>

              <h6 style={{ textAlign: "start" }}>Dog</h6>
            </ListGroup.Item>
            <ListGroup.Item action variant="primary" className="list_group">
              <h4 style={{ textAlign: "start" }}>Ms. Suman Semalty</h4>
              <h6 style={{ textAlign: "start" }}>July 5 2020 / 11.00 A.M.</h6>

              <h6 style={{ textAlign: "start" }}>Cat</h6>
            </ListGroup.Item>
            <ListGroup.Item action variant="primary" className="list_group">
              <h4 style={{ textAlign: "start" }}>Mr. Lav Sharma</h4>
              <h6 style={{ textAlign: "start" }}>July 6 2020 / 9.00 A.M.</h6>

              <h6 style={{ textAlign: "start" }}>Cat</h6>
            </ListGroup.Item>
            <ListGroup.Item action variant="primary" className="list_group">
              <h4 style={{ textAlign: "start" }}>Mr. Kunal Choudhary</h4>
              <h6 style={{ textAlign: "start" }}>July 6 2020 / 11.00 A.M.</h6>

              <h6 style={{ textAlign: "start" }}>Dog</h6>
            </ListGroup.Item>
            <ListGroup.Item action variant="primary" className="list_group">
              <h4 style={{ textAlign: "start" }}>Ms. Rutuja Bhate</h4>
              <h6 style={{ textAlign: "start" }}>July 7 2020 / 9.00 A.M.</h6>

              <h6 style={{ textAlign: "start" }}>Cat</h6>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}

Appointment.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Appointment);