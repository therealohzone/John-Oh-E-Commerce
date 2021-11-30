import React, { Component } from 'react';
import Jquery from "jquery"
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import M from "materialize-css";
import Carousel from "../Carousel";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.min.css";




const {useEffect, useRef, useState} = React;

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Carousel React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Carousel />
    </div>
  );
}

const styles = {
  headingText: {
    fontSize: 50,
    fontWeight: 300
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default Carousel;

  

