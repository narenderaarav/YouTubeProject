import React from "react";
import './DropDown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSortDown, faUser,
    
} from '@fortawesome/free-solid-svg-icons'

import { NavLink } from "react-router-dom";

class DropDown extends React.Component {
  // state = {
  //   toggleDropDown: false
  // };

  // handleNavButtonClick = () => {
  //   this.setState(state => {
  //     return { toggleDropDown: !state.toggleDropDown };
  //   });
  // };

  // getClasses = () => {
  //   let classes = ["drop-down"];

  //   let toggleClassName =
  //     this.state.toggleDropDown === true ? "open" : "closed";

  //   classes.push(toggleClassName);

  //   return classes.join(" ");
  // };

  render() {
    return (
      <div class="dropdown">
      <span class="dropbtn"><FontAwesomeIcon icon={faUser}/> <span>Profile</span>
      </span>
      <div class="dropdown-content">
        <NavLink exact to="/signup">Signup</NavLink>
        <NavLink exact to="/myaccount">My Account</NavLink>
      </div>
    </div>
    
    );
  }
}

export default DropDown;
