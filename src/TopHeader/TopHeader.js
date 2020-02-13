import React from "react";
import './TopHeader.css';
import Menu from './Menu'
import Search from './Search'
import DropDown from './DropDown'
import {Container} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//     faCoffee, faSearch,
    
// } from '@fortawesome/free-solid-svg-icons'

function TopHeader(){
  return(<>
      <div className="topHeader">
        <Container> 
          <div className="flex-container">
          <div className="logo">Logo here</div>
          <div className="headRight">
          <div className="navBar">  
            <Menu/>         
            </div>
            <Search/>
            <DropDown/>
            </div>
            </div>
        </Container>
      </div>


    </>
  )
}

export default TopHeader;