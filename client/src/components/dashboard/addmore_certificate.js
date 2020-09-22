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
            <form action='http://localhost:5000/api/users/profile' encType="multipart/form-data" method="POST">
             <h3>Upload Certificate</h3>
          
           

            <p style={{ color:"red"}}>You must upload your certificate in order to complete the registration process
          </p>

        <div className="form-group">
                <label>Upload Certificate</label>
                <input type="file" className="file-input" name="profile" required/>
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