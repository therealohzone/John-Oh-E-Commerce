import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import one from "./assets/logo.png";
import two from "./assets/logo.png";
import three from "./assets/logo.png";
import four from "./assets/logo.png";
import five from "./assets/logo.png";

class Carousel extends Component {
  componentDidMount() {
    const options = {
      duration: 300,
      onCycleTo: () => {
        console.log("New Slide");
      }
    };
    M.Carousel.init(this.Carousel, options);

    //Instance Plugin
    // let instance = M.Carousel.getInstance(this.Carousel);
    // instance.next(2);
  }

  render() {
    return (
      <div
        ref={Carousel => {
          this.Carousel = Carousel;
        }}
        className="carousel"
      >
        <a className=" carousel-item">
          <img alt="1" src={one} />
        </a>
        <a className="carousel-item">
          <img alt="2" src={two} />
        </a>
        <a className="carousel-item">
          <img alt="3" src={three} />
        </a>
        <a className="carousel-item">
          <img alt="4" src={four} />
        </a>
        <a className="carousel-item">
          <img alt="5" src={five} />
        </a>
      </div>
    );
  }
}

export default Carousel;
