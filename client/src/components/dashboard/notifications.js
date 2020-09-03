import React, { Component } from "react";
import { ListGroup, Navbar } from "react-bootstrap";
import "./css/notification.css";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export class Notification extends Component {
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
          </Navbar>
        </div>

        <h3
          style={{
            background: "#201E4D",
            color: "#fff",
            padding: "15px",
            margin: "auto",
            marginTop: "10px",
            maxWidth: "80%",
          }}
        >
          Notifications
        </h3>

        <div className="notify_class">
          <ListGroup>
            <h6 style={{ textAlign: "start", marginTop: "5px" }}>Today</h6>
            <ListGroup.Item action variant="primary" className="list_grp">
              <h5 style={{ textAlign: "start" }}>Mr. Shawn Louis</h5>
            </ListGroup.Item>
            <ListGroup.Item action variant="primary" className="list_grp">
              <h5 style={{ textAlign: "start" }}>Mr. Ruvin Rodrigues</h5>
            </ListGroup.Item>
            <h6 style={{ textAlign: "start", marginTop: "5px" }}>Yesterday</h6>
            <ListGroup.Item action variant="primary" className="list_grp">
              <h5 style={{ textAlign: "start" }}>Ms. Suman Semalty</h5>
            </ListGroup.Item>
            <ListGroup.Item action variant="primary" className="list_grp">
              <h5 style={{ textAlign: "start" }}>Mr. Lav Sharma</h5>
            </ListGroup.Item>
            <ListGroup.Item action variant="primary" className="list_grp">
              <h5 style={{ textAlign: "start" }}>Mr. Kunal Choudhary</h5>
            </ListGroup.Item>
            <h6 style={{ textAlign: "start", marginTop: "5px" }}>
              July 01, 2020
            </h6>
            <ListGroup.Item action variant="primary" className="list_grp">
              <h5 style={{ textAlign: "start" }}>Ms. Rutuja Bhate</h5>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default Notification;
