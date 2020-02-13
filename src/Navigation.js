import React from 'react';
import './TopHeader/TopHeader.css';

import {Container,
  Navbar,
  NavDropdown,
  Nav,
  Form, 
  InputGroup,  
  FormControl, 
  Row, 
  Col, 
  Button,
  Image
  
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCoffee, faSearch,
    
} from '@fortawesome/free-solid-svg-icons'



function Navigation(){
  return(
    <div className="navContaint">
   <Container>
     <div className="navbar">
       <div className="mylogo"><Image className="logo" src="assets/logo.jpg"/></div>
      
         <div className="navi">
            <ul>
              <li>Register</li>
              <li>Register</li>
              <li>Register</li>
            </ul>
        </div>


          <div className="searchBar">
   <Form>    
       <InputGroup>       
              <Form.Control
                  type="text"
                  placeholder="Search here.."
              />
              <InputGroup.Prepend>
                  <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
              </InputGroup.Prepend>
        </InputGroup>
   </Form>
          </div>

          <div>user here</div>
      
          </div>
     
   </Container>
    </div>
)}

export default Navigation;