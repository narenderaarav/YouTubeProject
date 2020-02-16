import React, { Component } from "react";
// import SelectDropDown from './SelectDropDown'
export class PickRegion extends Component {

  render() {
    const { values, handleChange } = this.props;
    return (
        <div className="container">
          <div className="contactForm">
            <div className="row">
              <div className="offset-md-3 col-md-6">
              <div className="contact">
                    <div className="contactHeading">
                        <h2>Pick Region</h2>
                    </div>
                  {/* <SelectDropDown/> */}
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <select
                        className="form-control"
                        defaultValue={values.pickregion}
                        onChange={handleChange("pickregion")}
                      >
                        <option value="">Pick Region</option>
                        <option value="hindi">Hindi</option>
                        <option value="english">English</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Next"
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

export default PickRegion;
