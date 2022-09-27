import React, { useEffect, useRef, useState } from "react";
import slideimg1 from "../img/slideshow-8.jpg";
import slideimg2 from "../img/slideshow-9.jpg";
import slideimg3 from "../img/slideshow-11.jpg";
import crown from '../img/crown-symbol.png';

const colors = [
  {img: slideimg1,title: "gift voucher", subtitle: "delicious royate", tagline: "give away your beloved customers"},
  {img: slideimg2,title: "the fresh", subtitle: "sale of 10% this dish", tagline: "food restaurant"},
  {img: slideimg3,title: "fresh fruits", subtitle: "we are open", tagline: "you will love it"},
];
const delay = 5500;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow" id="home">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {colors.map((slide, index) => (
          <div className="slide" key={index} style={{ backgroundImage:`url(${slide.img})` }}>
            <div className="content">
              <img src={crown} alt="" />
              <h3>{slide.subtitle}</h3>
              <h1>{slide.title}</h1>
              <p>{slide.tagline}</p>
              <a href="#order" className="btn">order now</a>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Slideshow
