
import React, { Component } from 'react';
import axios from 'axios';
import {  Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { Input } from "reactstrap";

export default class EditAppointment extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userDate: '',
            userTiming: '',
        }
    }


    onChangeuserDate = (e) => {
        this.setState({
            userDate: e.target.value
        });
    }

    onChangeuserTiming = (e) => {
        this.setState({
            userTiming: e.target.value
        });
    }

 

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            userDate: this.state.userDate,
            userTiming: this.state.userTiming,
        };
        axios.patch('http://localhost:5000/api/schedule/update/'+this.props.match.params.id, obj)        
        this.props.history.push('/schedule');
    }

    input = () => {
        return(<div>
            <div className="form-group">
                        <label>Date </label>
                        <Input
                                type="date" 
                                className="form-control"
                                value={this.state.userDate}
                                onChange={this.onChangeuserDate}
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Timing </label>
                        <Input 
                                type="time" 
                                className="form-control"
                                value={this.state.userTiming}
                                onChange={this.onChangeuserTiming}
                                required
                                />
                    </div>
                    
                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Appointment" className="btn btn-primary" />
                    </div>
        </div>);
    }

    render() {
        return (<div>
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
            <div className="container" style={{padding: '150px'}}>
                <h3 align="center">Update Appointment</h3>
                <form onSubmit={this.onSubmit}>
                    {this.input()}
                </form>
            </div></div>
        )
    }
}

