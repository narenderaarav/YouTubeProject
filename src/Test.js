import React, {Component} from 'react'
import {Container,Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';


function Test() {
  return (
    <Container>
  <Row>
    <Col>1 of 3</Col>
    <Col xs={6}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col xs={5}>2 of 3 (wider)</Col>
    <Col><Button variant="primary">Primary</Button></Col>
  </Row>  
</Container>
  )
}

export default Test;