// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Alice Kala",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Gavin",
    text: "Dui vivamus arcu felis bibendum ut tristique et egestas quis. Adipiscing diam donec adipiscing tristique.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Robert Tanner",
    text: "Gravida in fermentum et sollicitudin ac orci phasellus egestas. Id donec ultrices tincidunt arcu non sodales.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Peter Parks",
    text: "Porttitor leo a diam sollicitudin tempor id. Tristique senectus et netus et malesuada fames ac turpis egestas.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 5,
    name: "Daisy Marine",
    text: "Tristique risus nec feugiat in fermentum posuere urna nec. Sed elementum tempus egestas sed sed risus.",
    img: "https://picsum.photos/101/101",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
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
    <div className="bg-white dark:bg-black dark:text-white duration-200 relative z-40 pt-10 pb-20">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2
            data-aos="fade-up"
            className="pt-8 text-3xl font-bold dark:text-primary"
          >
            Testimonials
          </h2>
        </div>
        {/* Testimonial Cards */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div>
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/60 dark:bg-white/10 hover:bg-primary dark:hover:bg-primary/20 dark:hover:text-white relative"
                >
                  <div className="">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-black/50 dark:text-gray-300 pt-1">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/30 text-9xl font-serif absolute top-0 right-4">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
