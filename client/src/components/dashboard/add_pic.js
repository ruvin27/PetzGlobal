import React, { Component } from "react";

export default class Certificate extends Component {
    render() {
        return (
            <div className="auth-inner_page">
          <div className="auth-wrapper_page ">
            <form action='/api/uploadcert' encType="multipart/form-data" method="POST">
        <div className="form-group">
                <label>Upload Picture</label>
                <input type="file" className="file-input" name="certificate" required/>
        </div>



             
        <div className='text-center pt-4'>
                <button type="submit" className="btn btn-primary btn-block">
              Upload Picture</button>
                </div> 
        </form>
        </div>
        </div>
        );
    }
}