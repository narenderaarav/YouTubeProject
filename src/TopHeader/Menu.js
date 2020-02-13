import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav>
        <input type="checkbox" id="chk" />
        <label for="chk" className="show-menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <ul className="menu">
          
            <NavLink exact to="/">
              Home
            </NavLink>
         
         
            <NavLink exact to="/about">
              About
            </NavLink>
          
            <NavLink exact to="/contact">
              Contact
            </NavLink>
         

          <label for="chk" className="hide-menu-btn">
            <FontAwesomeIcon icon={faTimes} />
          </label>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
