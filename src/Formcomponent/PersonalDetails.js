import React, { Component } from "react";
import "./Form.css";
export class PersonalDetails extends Component {
  
  state = {
    nameError: "please fill the name",
    emailError: "Please fill Email",
    passwordError: "Please fill Password",
    retypeError: "Please fill Retype Password",
    passionError: "Please fill Pick Passion",
    regionError: "Please fill Pick Region"
  };
  render() {
    const { values, handleChange, nameError } = this.props;
    return (

        <div className="container">
          <div className="row">
            <div className="offset-md-3 col-md-6">
              <div className="contact">
                <div className="contactHeading">
                  <h2>Registration Form</h2>
                </div>

                <div className="contactForm">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Name"
                          defaultValue={values.name}
                          onChange={handleChange("name")}
                        />
                        <div className="error">{this.state.nameError}</div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Email Address"
                          defaultValue={values.email}
                          onChange={handleChange("email")}
                        />
                        <div className="error">{this.state.emailError}</div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Enter Password"
                          defaultValue={values.password}
                          onChange={handleChange("password")}
                        />
                        <div className="error">{this.state.passwordError}</div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Retype Password"
                          defaultValue={values.retypepassword}
                          onChange={handleChange("retypepassword")}
                        />
                        <div className="error">{this.state.retypeError}</div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="button"
                          value="Registration"
                          className="btn btn-success"
                          onClick={this.props.nextStep}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default PersonalDetails;
