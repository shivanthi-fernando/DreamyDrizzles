// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/hero_img/1.png";
import Image2 from "../../assets/hero_img/2.png";
import Image3 from "../../assets/hero_img/3.png";
import Image4 from "../../assets/hero_img/4.png";
import Image5 from "../../assets/hero_img/5.png";

const Hero = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // Hero Section
    <div className="w-screen h-[50px]">
      <Slider {...settings}>
        <div>
          <img
            src={Image1}
            alt="Slide 1"
            className="w-screen h-full object-cover"
          />
        </div>
        <div>
          <img
            src={Image2}
            alt="Slide 2"
            className="w-screen h-full object-cover"
          />
        </div>
        <div>
          <img
            src={Image3}
            alt="Slide 3"
            className="w-screen h-full object-cover"
          />
        </div>
        <div>
          <img
            src={Image4}
            alt="Slide 2"
            className="w-screen h-full object-cover"
          />
        </div>
        <div>
          <img
            src={Image5}
            alt="Slide 3"
            className="w-screen h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
