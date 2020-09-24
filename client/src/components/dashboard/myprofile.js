import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/myprofile_css.css'
import { ListGroup, Navbar, Dropdown, Modal, Button} from "react-bootstrap";
import "./css/myprofilecss.css"
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from'../assets/pro.png';
import {FcCalendar,FcViewDetails,FcCamera,FcGallery} from "react-icons/fc";
import { AiFillCamera } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { BsFillTrashFill } from "react-icons/bs";
import axios from 'axios';
import Editprofile from "./edit_profile";


class MyProfile extends Component {
  _isMounted = false;

onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    name : '',
    show : false,
    user : {}
  }

componentDidMount() {
    this._isMounted = true;
    axios.get(`http://localhost:5000/api/users/find/${this.props.auth.user.email}`)
    .then(res => {
      if (this._isMounted) {
      this.setState({
        name : res.data.user.filename,
        user : res.data.user
      })
    }
    })
  
  }
componentWillUnmount = () => {
      this._isMounted = false;
    }

handleClose = () => this.setState( {show:false});

handleShow = () => this.setState( {show:true});

upload = () => {
    axios.post(`http://localhost:5000/api/users/profile`)
    .then(res => {
      console.log(res)
    })
}

remove = () => {
    this.setState({
      name: ""
    });
   //window.location.reload(false);

    axios.patch(`http://localhost:5000/api/users/delete/${this.props.auth.user.email}`)
    .then(res => {
      console.log(res)
    })
}

profilepic = () => { 
    if(this.state.name === '')
    {
      return <img  className="img-profile" alt="cat" src={profile}/>
    }
     return <img  className="img-profile" alt="cat" src={require(`../assets/${this.state.name}`)}/>
}

coverpic = () => {
  if(this.state.name === '')
    {
      return <img  className="img-back"  alt="cat_baclground" src={profile}/>
    }
     return <img  className="img-back"  alt="cat_baclground" src={require(`../assets/${this.state.name}`)}/>
}



  options = () => {
    if(this.state.name === '')
    {
     return (<Dropdown.Menu> 
      <Dropdown.Item href="#"><FcCamera size="25px" />Take Photo</Dropdown.Item>
      <Dropdown.Item onClick={this.handleShow}><FcGallery size="25px" />Gallery</Dropdown.Item>
      <Modal show={this.state.show} onHide={this.handleClose}>
      <form action='http://localhost:5000/api/users/profile' encType="multipart/form-data" method="POST">
        
        <Modal.Header closeButton>
          <Modal.Title>Upload Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="file" accept="image/*" multiple ={false} name="pro" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Upload
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
      </Dropdown.Menu> );
    }
    else {
      return (<Dropdown.Menu> 
      <Dropdown.Item onClick={this.remove} href="#">{" "}<BsFillTrashFill size="20px"/>{" "}Remove  Photo</Dropdown.Item>
    <Dropdown.Item href="#"><FcCamera size="25px" />{" "}Take Photo</Dropdown.Item>
    <Dropdown.Item href="#"><FcGallery size="25px" />{" "}Gallery</Dropdown.Item>
    </Dropdown.Menu> );
  }
}

coveroptions = () => {
  if(this.state.name === '')
  {
   return (<Dropdown.Menu> 
    <Dropdown.Item href="#"><FcCamera size="25px" />Take Photo</Dropdown.Item>
    <Dropdown.Item onClick={this.handleShow}><FcGallery size="25px" />Gallery</Dropdown.Item>
    <Modal show={this.state.show} onHide={this.handleClose}>
    <form action='http://localhost:5000/api/users/profile' encType="multipart/form-data" method="POST">
      
      <Modal.Header closeButton>
        <Modal.Title>Upload Picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="file" accept="image/*" multiple ={false} name="pro" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>
          Close
        </Button>
        <Button variant="primary">
          Upload
        </Button>
      </Modal.Footer>
      </form>
    </Modal>
    </Dropdown.Menu> );
  }
  else {
    return (<Dropdown.Menu> 
    <Dropdown.Item onClick={this.remove} href="#">{" "}<BsFillTrashFill size="20px"/>{" "}Remove  Photo</Dropdown.Item>
  <Dropdown.Item href="#"><FcCamera size="25px" />{" "}Take Photo</Dropdown.Item>
  <Dropdown.Item href="#"><FcGallery size="25px" />{" "}Gallery</Dropdown.Item>
  </Dropdown.Menu> );
}
}



  
render(){
  return (
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
    
      
          <div className="container_class">
            {this.coverpic()}
            <div className="centered">
              {this.profilepic()}
                <div style={{position: "absolute", color:"#000",bottom: "50px" ,right: "0px"}}>
              <Dropdown  >
            <Dropdown.Toggle variant="" id="dropdown-basic">
            <AiFillCamera size="50px"/>
            </Dropdown.Toggle>
        
           {this.options()}
          </Dropdown>
              
            </div>
            </div>
            
            <div className="bottom-right">

            <Dropdown  >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FcCamera size="30px" />Edit cover Photo
            </Dropdown.Toggle>
           {this.coveroptions()}
          </Dropdown>


             
            </div>
          </div>
 
        <div className="name">
          <h1 style={{padding: '20px'}}>
            {this.state.user.name} </h1>
        </div>
          
          
          <div className="container">
   
          <ListGroup.Item action variant="primary" className="list_group2">
              <h4 style={{ textAlign: "center",color:"#000" }}>My Details</h4>
              <h6 style={{ textAlign: "start" }}>Date Of Birth : {this.state.user.dob}</h6>
              <h6 style={{ textAlign: "start" }}>Address : {this.state.user.address}</h6>
              <h6 style={{ textAlign: "start" }}>City : {this.state.user.city} </h6>
              <h6 style={{ textAlign: "start" }}>Pincode : {this.state.user.pincode} </h6>
              <h6 style={{ textAlign: "start" }}>Experience : {this.state.user.experience} </h6>
              <h6 style={{ textAlign: "start" }}>Contact Number : {this.state.user.phone}</h6>
              <Editprofile user={this.props.auth.user}/>
          </ListGroup.Item>
          </div>
         
           
             <div className="btn-group">
                <Link to="/schedule">
                <button type="button" className="btn btn-primary"><FcCalendar size="30px" />Appoinments</button></Link>
                <Link to='/history'>
                <button type="button" className="btn btn-primary"><FcViewDetails size="30px" />History</button></Link>
              </div> 
           
           

            
            
            
  </div>
  );
}
}
MyProfile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(MyProfile);