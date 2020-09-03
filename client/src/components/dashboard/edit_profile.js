import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

function TheModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ "background-color": "#201e4d", color: "white" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Your Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="login-form">
          <FormGroup>
            <Label className="font-large">Pet Name</Label>
            <Input type="dosage" placeholder="Pet Name" />
          </FormGroup>

          <FormGroup>
            <Label className="font-large pt-3">Date Of Birth</Label>
            <Input type="date" placeholder="Date Of Birth" />
          </FormGroup>

          <FormGroup>
            <Label className="font-large"> Breed</Label>
            <Input type="text" placeholder="Breed" />
          </FormGroup>

          <FormGroup>
            <Label className="font-large">Bio</Label>
            <Input type="text" placeholder=" " />
          </FormGroup>

          {/* Add link to my appointments page */}
          {/* <Link to="/MyAppointmentsPage"> */}
          <Button
            className="btn-lg btn-dark btn-block"
            style={{ borderRadius: "80px", background: "#201e4d" }}
          >
            Save
          </Button>
          {/* </Link> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          style={{
            background: "#201e4d",
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Edit_Profile() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <Button
            className="button_holder"
            onClick={() => setModalShow(true)}
            style={{
              
            }}
          >
        Edit Details
          </Button>
      <TheModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Edit_Profile;
