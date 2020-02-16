import React, { Component } from "react";
import {NewDropDown} from "./customdropdown/dropdown"; 

export class Pickyourpassion extends Component {
  state = {
    uniqueKey: "value",
    selected: [],
    data: [
      {
        label: "TV Shows",
        value: 1
      },
      {
        label: "Education",
        value: 2
      },
      {
        label: "Movies",
        value: 3
      }
    ]
  };

  static getDerivedStateFromProps(props, state){
    let values = state.data.reduce((arr, item) => {
      var index = props.data.indexOf(item.label);
      if(index != -1) {
        arr.push(item.value)
      }
      return arr
    }, [])

    return {
      selected: values
    }
  }

  getLablesFromValues(values) {
    return this.state.data.reduce((arr, item) => {
      var index = values.indexOf(item.value);
      if(index != -1) {
        arr.push(item.label)
      }
      return arr
    }, [])
  }

  toggleChangeListItem = uniqueKey => {
    if (uniqueKey === "ALL") {
      if (this.state.selected.length === this.state.data.length) {
        // this.setState({
        //   selected: []
        // });
        this.props.hanldePassionChange([])
      } else {
        const allUniqueKeys = this.state.data.map(
          item => item[this.state.uniqueKey]
        );
        // this.setState({
        //   selected: allUniqueKeys
        // });
        let labels = this.getLablesFromValues(allUniqueKeys)
        this.props.hanldePassionChange(labels);
      }
    } else {
      let updatedSelected = [...this.state.selected];
      if (updatedSelected.indexOf(uniqueKey) > -1) {
        updatedSelected.splice(updatedSelected.indexOf(uniqueKey), 1);
      } else {
        updatedSelected.push(uniqueKey);
      }
      // this.setState({
      //   selected: updatedSelected
      // });
      let labels = this.getLablesFromValues(updatedSelected)
      this.props.hanldePassionChange(labels)
    }
  };

  render() {
    const { values, handleChange } = this.props;
    return (
        <div className="container">
          <div className="contactForm">
            <div className="row">
              <div className="offset-md-3 col-md-6">
                <div className="contact">
                  <div className="contactHeading">
                    <h2>Pick Your Passion</h2>
                  </div>

                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        {/* <select
                          className="form-control"
                          defaultValue={values.pickregion}
                          onChange={handleChange("pickregion")}
                        >
                          <option value="">Pick Your Passion</option>
                          <option value="TV Shows">TV Shows</option>
                          <option value="Education">Education</option>
                        </select> */}
                         <NewDropDown
                            shouldHaveSelectAll={true}
                            uniqueKey={this.state.uniqueKey}
                            data={this.state.data}
                            selected={this.state.selected}
                            toggleChangeListItem={this.toggleChangeListItem}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Done"
                          className="btn btn-success"
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

export default Pickyourpassion;
