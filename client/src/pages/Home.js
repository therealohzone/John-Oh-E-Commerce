import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  var carousel = $(".carouselbox");
  // Selects buttons using their parent carousel element
  // var next = carousel.querySelector(".next");
  // var prev = carousel.querySelector(".prev");
  var index = 0;
  var currentImage;
  var images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
    "https://picsum.photos/300/203"
  ];
  carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";
  function navigate(direction) {
    index = index + direction;
    if (index < 0) {
      index = images.length - 1;
    } else if (index > images.length - 1) {
      index = 0;
    }
    currentImage = images[index];
    carousel.style.backgroundImage = "url('" + currentImage + "')";
  }
  carousel.addEventListener("click", function () {
    window.location.href = images[index];
  });
  // next.addEventListener("click", function (event) {
  //   event.stopPropagation();
  //   navigate(1);
  // });
  // prev.addEventListener("click", function (event) {
  //   event.stopPropagation();
  //   navigate(-1);
  // });
  navigate(0);

  return (
    <div className="container">
      <div class="carouselbox" aria-role="img" aria-label="carousel">
        <button class="prev">
          ◀ Previous
        </button>
        <button class="next">
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default Home;
