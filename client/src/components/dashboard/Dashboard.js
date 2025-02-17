import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./notifications";
import "./css/landing.css";
import {
  faPaw,
  faList,
  faCreditCard,
  faUserCircle,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Button, Badge  ,Dropdown,SplitButton} from "react-bootstrap";
import Uncontrolcarousel from "./carousel";
import { Link } from "react-router-dom";
import { FcMenu,FcSettings } from "react-icons/fc";
import profile from'../assets/pro.png';
import axios from 'axios';
class Dashboard extends Component {
  _isMounted = false;

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  state = {
    name : ''
  }

  profilepic = () => { 
    if(this.state.name === '')
    {
      return  <img style={{width:"100px" ,height:"100px", borderRadius:"50%"}}  alt="cat" src={profile}/>

    }
     return <img  style={{width:"100px" ,height:"100px", borderRadius:"50%"}} alt="cat" src={require(`../assets/${this.state.name}`)}/>
    
  }
componentDidMount() {
  this._isMounted = true;
  axios.get(`http://localhost:5000/api/users/find/${this.props.auth.user.email}`)
    .then(res => {
      if (this._isMounted) {
      this.setState({
        name : res.data.user.filename
      });
    }
    });

}
  componentWillUnmount = () => {

    this._isMounted = false;

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
            <Link to="/notifications" className="notification">
              <Button style={{ background: "#201e4d", border: "none" }}>
                <FontAwesomeIcon
                  icon={faBell}
                  size="2x"
                  style={{ color: "#fff" }}
                ></FontAwesomeIcon>
                <Badge pill variant="danger">
                  <span className="sr-only">unread notification</span>6
                </Badge>
              </Button>
            </Link>
            
            <SplitButton
        key={'left'}
        id={`dropdown-button-drop-${'left'}`}
        drop={'left'}
        variant="primary"
        title={<FcMenu size="40px" />}
      >
      <Dropdown.Item href="#"><FcSettings size="20px"/>{" "}Setting</Dropdown.Item>
      <Dropdown.Item onClick={this.onLogoutClick} >Logout</Dropdown.Item>
        
       
      </SplitButton>

          </Navbar>
        </div>

        <div className="unc_cor">
          <Uncontrolcarousel />
        </div>

        <Link to="/schedule">
          <Button className="btn_button" style={{ background: "#FFAE33" }}>
            <FontAwesomeIcon
              className="big_icon"
              icon={faPaw}
              size="6x"
              style={{ color: "#fff" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="small_icon"
              icon={faList}
              size="2x"
              style={{ color: "#fff" }}
            ></FontAwesomeIcon>
            <h2>Appointments</h2>
          </Button>
        </Link>
        <Link to="/mypatients">
          <Button className="btn_button" style={{ background: "#FF3333" }}>
            <FontAwesomeIcon
              className="big_icon"
              icon={faPaw}
              size="6x"
              style={{ color: "#fff" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="small_icon"
              icon={faUserCircle}
              size="2x"
              style={{ color: "#fff" }}
            ></FontAwesomeIcon>
            <h2>My Patients</h2>
          </Button>
        </Link>
        <Link to="/invoice">
          <Button className="btn_button" style={{ background: "#4D79FF" }}>
            <FontAwesomeIcon
              className="big_icon"
              icon={faPaw}
              size="6x"
              style={{ color: "#fff" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="small_icon"
              icon={faCreditCard}
              size="2x"
              style={{ color: "#fff" }}
            ></FontAwesomeIcon>
            <h2>Invoice</h2>
          </Button>
        </Link>
         <Link to="/myprofile">
          <Button className="btn_button" style={{ background: "#FF69B4" }}>
            
           
            {this.profilepic()}           
            
            <h2>My Profile</h2>
          </Button>
        </Link>
      </div>  
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
