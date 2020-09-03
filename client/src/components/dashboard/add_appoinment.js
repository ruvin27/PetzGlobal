import React from "react";
import "./css/add_prescription.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";


class Login extends React.Component {
  render() {
    return (
      <Form className="login-form">
        <h1 className="text-center">Appoinment</h1>

        <FormGroup>
          <Label className="font-large pt-3">Name </Label>
          <Input type="text" placeholder="Enter Name" />
        </FormGroup>

        <FormGroup>
          <Label className="font-large">Appoinment For</Label>
          <Input type="text" placeholder="Event Title" />
        </FormGroup>
        

        <FormGroup>
          <Label className="font-large pt-3">Date</Label>
          <Input type="date" placeholder="Date" />
        </FormGroup>

        <FormGroup>
          <Label className="font-large"> Start Time</Label>
          <Input type="time" placeholder="Start time" />
        </FormGroup>

        <FormGroup>
          <Label className="font-large">End Time</Label>
          <Input type="time" placeholder="End time" />
        </FormGroup>

        


        <Link to="/appointments">
          <Button className="btn-lg btn-dark btn-block">submit</Button>
        </Link>

        <div className="text-center pt-4">
          <Link to="#">Create Another Appoinment</Link>
        </div>
      </Form>
    );
  }
}

export default Login;
