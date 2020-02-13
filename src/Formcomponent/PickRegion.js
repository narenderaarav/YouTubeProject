import React, { Component } from "react";
export class PickRegion extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <form>
        <div className="container">
          <div className="contactForm">
            <div className="row">
              <div className="offset-md-3 col-md-6">
              <div className="contact">
                    <div className="contactHeading">
                        <h2>Pick Region</h2>
                    </div>
                
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <select
                        className="form-control"
                        defaultValue={values.pickregion}
                        onChange={handleChange("pickregion")}
                      >
                        <option value="">Pick Region</option>
                        <option value="Hindi">Hindi</option>
                        <option value="English">English</option>
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
                        onClick={this.continue}
                      />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default PickRegion;
