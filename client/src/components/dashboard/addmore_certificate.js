import React, { Component } from "react";

export default class Certificate extends Component {
        constructor(){
            super();
            this.state = {
                email: ""
            } 
        }
        onChange = e => {
            this.setState({
              [e.target.name] : e.target.value
            })
          }
    render() {
        return (
            <div className="auth-inner_page">
          <div className="auth-wrapper_page ">
            <form action='/api/uploadcert' encType="multipart/form-data" method="POST">
             <h3>Upload Certificate</h3>
            <div className="form-group">
                <label>Email address</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
            </div>
           

            <p style={{ color:"red"}}>You must upload your certificate in order to complete the registration process
          </p>

        <div className="form-group">
                <label>Upload Certificate</label>
                <input type="file" className="file-input" name="certificate" required/>
        </div>

        <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" required/>
                        <label className="custom-control-label" htmlFor="customCheck1"> 
                        I hereby certify that, to the best of my knowledge, the provided Medical Certificate is true and accurate.</label>
                    </div>
                </div>

             
        <div className='text-center pt-4'>

            
                <button type="submit" className="btn btn-primary btn-block">
                Upload Certificate</button>

                </div> 


            
          

        </form>
        </div>
        </div>
        );
    }
}