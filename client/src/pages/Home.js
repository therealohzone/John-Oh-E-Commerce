import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
const {useEffect, useRef, useState} = React;

const Home = () => {
  // var carousel = $(".carouselbox");
  // // Selects buttons using their parent carousel element
  // // var next = carousel.querySelector(".next");
  // // var prev = carousel.querySelector(".prev");
  // var index = 0;
  // var currentImage;
  var children = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
    "https://picsum.photos/300/203"
  ];
  // carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";
  // function navigate(direction) {
  //   index = index + direction;
  //   if (index < 0) {
  //     index = images.length - 1;
  //   } else if (index > images.length - 1) {
  //     index = 0;
  //   }
  //   currentImage = images[index];
  //   carousel.style.backgroundImage = "url('" + currentImage + "')";
  // }
  // carousel.addEventListener("click", function () {
  //   window.location.href = images[index];
  // });
  // // next.addEventListener("click", function (event) {
  // //   event.stopPropagation();
  // //   navigate(1);
  // // });
  // // prev.addEventListener("click", function (event) {
  // //   event.stopPropagation();
  // //   navigate(-1);
  // // });
  // navigate(0);

  const [activeSlide, setActiveSlide] = useState(0);
  const activeSlideRef = useRef(null);

  useEffect(() => {
    if (activeSlideRef.current) {
      activeSlideRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [activeSlide]);

  const moveLeft = Math.max(0, activeSlide - 1);
  const moveRight = Math.min(children.length - 1, activeSlide + 1);

  return (
    <div className="container">
      <button onClick={() => setActiveSlide(moveLeft)}>PREV</button>
      <div id="test">
        {children.map((child, i) => {
          const active = i === activeSlide;
          return (
            <div className={`slide ${active ? "active" : ""}`} ref={active ? activeSlideRef : null} id={`slide-${i}`} key={`slide-${i}`}>
              {child}
            </div>
          );
        })}
      </div>

      <button onClick={() => setActiveSlide(moveRight)}>NEXT</button>
      {/* <div class="carouselbox" aria-role="img" aria-label="carousel">
        <button class="prev">
          ◀ Previous
        </button>
        <button class="next">
          Next ▶
        </button>
      </div> */}
    </div>
  );
};

export default Home;
