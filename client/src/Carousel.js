import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import one from "./assets/hotbutt.jpg"; //chnage the path
import two from "./assets/flies.jpg";
import three from "./assets/softhackle.jpg";
import four from "./assets/alpine.jpg";
import five from "./assets/port.jpg";

class Carousel extends Component {
  componentDidMount() {
    const options = {
      duration: 10,
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
        style={{height: 600}}
      >
        <a className="carousel-item d-block w-25">
          <img alt="1" src={one} />
        </a>
        <a className="carousel-item d-block w-25">
          <img alt="2" src={two} />
        </a>
        <a className="carousel-item d-block w-25">
          <img alt="3" src={three} />
        </a>
        <a className="carousel-item d-block w-25">
          <img alt="4" src={four} />
        </a>
        <a className="carousel-item d-block w-25">
          <img alt="5" src={five} />
        </a>
      </div>
    );
  }
}

export default Carousel;
