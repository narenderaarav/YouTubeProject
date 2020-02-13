import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./SearchListing.css";
function SearchListing() {
  return (
    <>
      <Container>
        <div className="listContainer">
          <Row>
            <Col md={3}>
              <div className="imageContainer">
                <Image src="./assets/banner.png" />
              </div>
            </Col>
            <Col md={9}>
              <div className="detailsContainer">
                <h1>
                  Ultimate Rajesh Khanna Hit Songs Jukebox | Best Of Bollywood
                  Old Hindi Songs
                </h1>
                <p>
                  Listen to all the evergreen Hindi songs of Rajesh Khanna in
                  this super hit non-stop jukebox!
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="listContainer">
          <Row>
            <Col md={3}>
              <div className="imageContainer">
                <Image src="./assets/banner.png" />
              </div>
            </Col>
            <Col md={9}>
              <div className="detailsContainer">
                <h1>
                  Ultimate Rajesh Khanna Hit Songs Jukebox | Best Of Bollywood
                  Old Hindi Songs
                </h1>
                <p>
                  Listen to all the evergreen Hindi songs of Rajesh Khanna in
                  this super hit non-stop jukebox!
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default SearchListing;
