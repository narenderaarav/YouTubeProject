import React, { Component } from 'react'
export default class SelectDropDown extends Component {
  constructor() {
    super()
    this.state= { expanded : false}
  }
  showCheckboxes() {
      var checkboxes = document.getElementById("checkboxes");
      if (!expanded) {
          checkboxes.style.display = "block";
          this.state.expanded = true;
      } else {
          checkboxes.style.display = "none";
          this.state.expanded = false;
      }
  }
  render() {
    return (
      <form>
        <div class="multiselect">
            <div class="selectBox" onclick="showCheckboxes()">
                <select>
                    <option>Select an option</option>
                </select>
                <div class="overSelect"></div>
            </div>
            <div id="checkboxes">
                <label for="one"><input type="checkbox" id="one"/>First checkbox</label>
                <label for="two"><input type="checkbox" id="two"/>Second checkbox </label>
                <label for="three"><input type="checkbox" id="three"/>Third checkbox</label>
            </div>
        </div>
      </form>
    )
  }
}