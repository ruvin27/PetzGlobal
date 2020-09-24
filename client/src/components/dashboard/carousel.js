import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./css/carousel.css";

class Uncontrolcarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              id="car_item"
              src="../assets/cat.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="h3_class">...First slide...</h3>
              <p style={{ marginBottom: "15%" }}>Welcome To PetzGlobal !!!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              id="car_item"
              src="../assets/cat2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="h3_class">...Second slide...</h3>
              <p style={{ marginBottom: "15%" }}>Welcome To PetzGlobal !!!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              id="car_item"
              src="../assets/cat2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="h3_class">...Third slide...</h3>
              <p style={{ marginBottom: "15%" }}>Welcome To PetzGlobal !!!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Uncontrolcarousel;
