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

export class Invoice extends Component {
  state = {
    invoices : []
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/invoices')
    .then(res => {
      this.setState({
        invoices : res.data
      })
    })
    .catch(res =>{
      console.log(res)
    })
  }
   onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  data = () => {
    return this.state.invoices.map((data,i) => {
      return (
            <ListGroup.Item action variant="primary" className="list_group" key={i}>
              <h4 style={{ textAlign: "start" }}>{data.name}</h4>
              <h6 style={{ textAlign: "start" }}>{data.amt}</h6>
            </ListGroup.Item>
        )
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
            background: "#4D79FF",
            padding: "15px",
            margin: "auto",
            marginTop: "10px",
            maxWidth: "80%",
          }}
        >
          Invoice
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

Invoice.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Invoice);