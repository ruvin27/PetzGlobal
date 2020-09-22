import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/myprofile_css.css'
import { ListGroup, Navbar} from "react-bootstrap";
import "./css/myprofilecss.css"
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cat_background  from '../assets/cat.jpg';
import cat from '../assets/cat_back.jpg';
import {FcCalendar,FcViewDetails,FcInspection} from "react-icons/fc";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from 'axios';


export class MyPatientProfile extends Component {
  _isMounted = false;

  state = {
    patient : {
      name: "",
      email: "",
      parent: "",
      pet: ""
    }
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount() {
    this._isMounted = true;
    axios.get(`http://localhost:5000/api/patients/find/${this.props.match.params.id}`)
    .then(res => {
      if (this._isMounted) {
      this.setState({
        patient : res.data
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

details = () => {
return (<div> 
  <div className="name">
<h3  style={{padding: '20px'}}>{this.state.patient.name}</h3>
  </div>
    
    
    <div className="container">
    <ListGroup.Item action variant="primary" className="list_group2">
<h4 style={{ textAlign: "center",color:"#000" }}>Patient Info </h4>
<h6 style={{ textAlign: "start" }}>Parent Name : {this.state.patient.parent} </h6>
<h6 style={{ textAlign: "start" }}>Breed : {this.state.patient.pet}</h6>
<h6 style={{ textAlign: "start" }}>Date Of Birth : 1/January/2001</h6>
<h6 style={{ textAlign: "start" }}> Bio :  </h6>
</ListGroup.Item>
</div>
    </div>)
}

render(){
  return (
    <div>
      <Navbar style={{ background: "#201e4d" }}>
              <Link to='/dashboard'>
              <Navbar.Brand
              className="nav_brand"
              style={{ color: "#fff", fontSize: "30px" }}
            >
            <FontAwesomeIcon
              icon={faPaw}
              size="2x"
              style={{ color: "#fff" }}
            ></FontAwesomeIcon>
            </Navbar.Brand>
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
    
      
          <div className="container_class">
            <img  className="img-back"  alt="cat_baclground" src={cat_background}/>
            <div className="centered">
              <img  className="img-profile" alt="cat" src={cat}/>
              <div style={{position: "absolute", color:"#000",bottom: "50px" ,right: "1%"}}>
            </div>
            </div>
            
            
          </div>
        
          {this.details()}
           
             <div className="btn-group">

                <button type="button" className="btn btn-primary"><FcCalendar size="30px" />Appoinments</button>
                <Link to='/history'>
                <button type="button" className="btn btn-primary"><FcViewDetails size="30px" />History</button></Link>
                <Link to='/add_prescription'>
                <button type="button" className="btn btn-primary"><FcInspection size="30px" />Add Prescription</button></Link>
              </div> 
              </div>

           
           

            
   
  );
}
}
MyPatientProfile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(MyPatientProfile);