import React, { Component } from "react";
import { ListGroup, Navbar } from "react-bootstrap";
import "./css/appointments.css";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FcAcceptDatabase ,FcDeleteDatabase} from "react-icons/fc";
import { BsFillClockFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
export class Approve_appoinment extends Component {
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
              href="#"
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
            background: "#FFC0CB",
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
            <ListGroup.Item action variant="primary" className="list_group">
            <h4 style={{ textAlign: "start" }}>Mr. Rajesh Semwal</h4>
            <h6 style={{ textAlign: "start" }}>Cat</h6>
            <h6 style={{ textAlign: "start" }}>Appoinment For Hair Treatment</h6>
            <h6 style={{ textAlign: "start" }}>Date: 20/07/2020</h6>
            <h6 style={{ textAlign: "start" }}>Time : 10:30 AM</h6>
            <div class="btn-group">
              <button type="button" class="btn btn-primary"><FcAcceptDatabase size="30px"/>Approve</button>
              <button type="button" class="btn btn-primary"><FcDeleteDatabase size="30px"/>Reject</button>
              <button type="button" class="btn btn-primary"><BsFillClockFill size="25px"/>{" "}Suggest Another Time</button>
            </div>
            </ListGroup.Item>
            <ListGroup.Item action variant="primary" className="list_group">
            <h4 style={{ textAlign: "start" }}>Mr. Deepak Kamble</h4>
            <h6 style={{ textAlign: "start" }}>Dog</h6>
            <h6 style={{ textAlign: "start" }}>Appoinment For Dental treatment</h6>
            <h6 style={{ textAlign: "start" }}>Date: 21/07/2020</h6>
            <h6 style={{ textAlign: "start" }}>Time : 12:30 PM</h6>
            <div class="btn-group">
              <button type="button" class="btn btn-primary"><FcAcceptDatabase size="30px"/>Approve</button>
              <button type="button" class="btn btn-primary"><FcDeleteDatabase size="30px"/>Reject</button>
              <button type="button" class="btn btn-primary"><BsFillClockFill size="25px"/>{" "}Suggest Another Time</button>
            </div>
            </ListGroup.Item>
            <ListGroup.Item action variant="primary" className="list_group">
            <h4 style={{ textAlign: "start" }}>Ms. Kajal Sharma</h4>
            <h6 style={{ textAlign: "start" }}>Cat</h6>
            <h6 style={{ textAlign: "start" }}>Appoinment For Hair Treatment</h6>
            <h6 style={{ textAlign: "start" }}>Date: 26/07/2020</h6>
            <h6 style={{ textAlign: "start" }}>Time : 10:30 AM</h6>
            <div class="btn-group">
              <button type="button" class="btn btn-primary"><FcAcceptDatabase size="30px"/>Approve</button>
              <button type="button" class="btn btn-primary"><FcDeleteDatabase size="30px"/>Reject</button>
              <button type="button" class="btn btn-primary"><BsFillClockFill size="25px"/>{" "}Suggest Another Time</button>
            </div>
            </ListGroup.Item>
           
          </ListGroup>
        </div>
      </div>
    );
  }
}
Approve_appoinment.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Approve_appoinment);
