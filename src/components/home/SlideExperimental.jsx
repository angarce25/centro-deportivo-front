import React from "react";
import Slider from "react-slick";
import "../home/hero-slider.css";

// características del slider
const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 5000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0"></div>

      <div className="slider__item slider__item-02 mt0"></div>

      <div className="slider__item slider__item-03 mt0"></div>

      <div className="slider__item slider__item-04 mt0"></div>

      <div className="slider__item slider__item-05 mt0"></div>

      <div className="slider__item slider__item-06 mt0"></div>

      <div className="slider__item slider__item-07 mt0"></div>

      <div className="slider__item slider__item-08 mt0"></div>

      <div className="slider__item slider__item-09 mt0"></div>

      <div className="slider__item slider__item-10 mt0"></div>
    </Slider>
  );
};

export default HeroSlider;
