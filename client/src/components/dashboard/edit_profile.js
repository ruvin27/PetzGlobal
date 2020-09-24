import React, {useState, useEffect} from "react";
import { Modal } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from 'axios';

function TheModal(props) {
  const [name,setName] = useState("");
  const [address,setAddress] = useState("");
  const [dob,setDob] = useState("");
  const [pincode,setPin] = useState("");
  const [experience,setExp] = useState("");
  const [phone,setPhone] = useState("");
  const [city,setCity] = useState("");
  const [email] = useState(props.user.email);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/find/${email}`)
      .then(res => {
        setName(res.data.user.name);
        setAddress(res.data.user.address);
        setDob(res.data.user.dob);
        setPin(res.data.user.pincode);
        setExp(res.data.user.experience);
        setCity(res.data.user.city);
        setPhone(res.data.user.phone);
      });
  }, [email]);

const onSubmit = (e) => {
  e.preventDefault();
  const User = {
    name: name,
    email: email,
    phone: phone,
    dob: dob,
    address: address,
    city: city,
    pincode: pincode,
    experience: experience,
  };
  axios
  .patch("http://localhost:5000/api/users/update/myprofile", User)
  props.onHide()
}
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ "backgroundColor": "#201e4d", color: "white" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Your Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="login-form">
          <FormGroup>
            <Label className="font-large">Name</Label>
            <Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required/>
          </FormGroup>

          <FormGroup>
            <Label className="font-large pt-3">Date Of Birth</Label>
            <Input type="date" placeholder="Date Of Birth" value={dob} onChange={e => setDob(e.target.value)} required/>
          </FormGroup>
          <FormGroup>
            <Label className="font-large">Address</Label>
            <Input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} required/>
          </FormGroup>

          <FormGroup>
            <Label className="font-large">City</Label>
            <Input type="text" placeholder="Address" value={city} onChange={e => setCity(e.target.value)} required/>
          </FormGroup>

          <FormGroup>
            <Label className="font-large"> Pincode</Label>
            <Input type="text" placeholder="Pincode" value={pincode} onChange={e => setPin(e.target.value)} required/>
          </FormGroup>

          <FormGroup>
            <Label className="font-large">Experience</Label>
            <Input type="text" placeholder=" " value={experience} onChange={e => setExp(e.target.value)} required />
          </FormGroup>
          <FormGroup>
            <Label className="font-large">Contact Number</Label>
            <Input type="text" placeholder=" " value={phone} onChange={e => setPhone(e.target.value)} required={true}/>
          </FormGroup>

          <Button
            className="btn-lg btn-dark btn-block"
            style={{ borderRadius: "80px", background: "#201e4d" }}
            type="submit"
            onClick={onSubmit}
          >
            Save
          </Button>
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

function Editprofile(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Label
            className="button_holder btn btn-primary"
            onClick={() => setModalShow(true)}
          >
        Edit Details 
          </Label>
      <TheModal show={modalShow} onHide={() => setModalShow(false)} user={props.user} />
    </>
  );
}

export default Editprofile;
