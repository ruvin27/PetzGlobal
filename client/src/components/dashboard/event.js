import React, { Component } from 'react';
import { ListGroup} from "react-bootstrap";
import { Link } from "react-router-dom";

export class Appointments extends Component {
    render() {
        return (
            <ListGroup.Item action variant="primary" className="list_group">
            <h3 style={{ textAlign: "start" }}>{this.props.obj.userName} </h3>
            <h6 style={{ textAlign: "start" }}>Date : {this.props.obj.userDate}</h6>
            <h6 style={{ textAlign: "start" }}>Issue: {this.props.obj.userReason}</h6>
            <h6 style={{ textAlign: "start" }}>appointment Timing : {this.props.obj.userTiming}</h6>
            <h6 style={{ textAlign: "start" }}>Completed Status : {this.props.obj.appointment_completed}</h6>
            </ListGroup.Item>
        );
    }
}


export class Patients extends Component {
    render() {
        return (
            <Link to ={"/mypatientprofile/"+this.props.obj.email}>
            <ListGroup.Item action variant="primary" className="list_group" >
              <h4 style={{ textAlign: "start" }}>{this.props.obj.name}</h4>
              <h6 style={{ textAlign: "start" }}>{this.props.obj.pet}</h6>
            </ListGroup.Item>
            </Link>
        );
    }
}

export class Invoices extends Component {
    render() {
        return (
            <ListGroup.Item action variant="primary" className="list_group">
            <h4 style={{ textAlign: "start" }}>{this.props.obj.name}</h4>
            <h6 style={{ textAlign: "start" }}>{this.props.obj.amt}</h6>
          </ListGroup.Item>
        );
    }
}
