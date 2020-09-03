import React from "react";
import "./css/add_prescription.css";
import { Button, FormGroup, Label, Input } from "reactstrap";
import axios from 'axios';

class Add_Prescription extends React.Component {
  constructor(){
    super()
    this.state = {
      medicine: "",
      strength: "",
      dosage: "",
      duration: ""
    }
  }
onChange = e => {
  this.setState({
    [e.target.name] : e.target.value
  })
}

onSubmit = e => {
  e.preventDefault()
  const New_Prescription = {
    medicine : this.state.medicine,
    dosage : this.state.dosage,
    duration : this.state.duration,
    strength : this.state.strength
  }
  axios.post('http://localhost:5000/api/prescribe', New_Prescription)
    .then(res => {
      this.props.history.push(`/history`)
    })
    .catch(res =>{
      console.log(res)
    });
}


  render() {
    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <h1 className="text-center">Prescription</h1>
        <FormGroup>
          <Label className="font-large pt-3">Medicine Name</Label>
          <Input type="name" placeholder="Medicine" name="medicine" value={this.state.medicine} onChange={this.onChange}/>
        </FormGroup>

        <FormGroup>
          <Label className="font-large">Times/Day</Label>
          <Input type="text" placeholder="Strength" name="strength" value={this.state.strength} onChange={this.onChange}/>
        </FormGroup>

        <FormGroup>
          <Label className="font-large">Dosage</Label>
          <Input type="text" placeholder="Dosage Amt." name="dosage" value={this.state.dosage} onChange={this.onChange}/>
        </FormGroup>

        <FormGroup>
          <Label className="font-large">Duration</Label>
          <Input type="text" placeholder="Duration" name="duration" value={this.state.duration} onChange={this.onChange}/>
        </FormGroup>
        <br />

        
          <Button className="btn-lg btn-dark btn-block" >submit</Button>
   
      </form>
    );
  }
}

export default Add_Prescription;
