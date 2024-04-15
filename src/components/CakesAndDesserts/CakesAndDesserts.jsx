// eslint-disable-next-line no-unused-vars
import React from "react";
import Img1 from "../../assets/cakes_and_desserts/1_blueberry_cheesecake.jpg";
import Img2 from "../../assets/cakes_and_desserts/2_carrot_cake.jpg";
import Img3 from "../../assets/cakes_and_desserts/3_cupcake.jpeg";
import { FaStar } from "react-icons/fa6";

const ItemsData = [
  {
    id: 1,
    img: Img1,
    title: "Blueberry Cheesecake",
    description:
      "This rich, velvety, and luscious cheesecake is studded with blueberries that burst with sweetness in every bite.",
  },
  {
    id: 2,
    img: Img2,
    title: "Carrot Cake",
    description:
      "This carrot cake sets the standard for carrot cakes everywhere. It’s deeply moist and filled with toasted pecans.",
  },
  {
    id: 3,
    img: Img3,
    title: "Cupcake",
    description:
      "This is a small, tasty snack cakes that are favored for their portability and portion-control.",
  },
];

const CakesAndDesserts = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white duration-200 relative z-40">
      <div className="container">
        {/* Header Section */}
        <div className="text-left mb-24">
          <h2
            data-aos="zoom-in"
            className="pt-8 pb-4 text-3xl dark:text-primary"
          >
            Cakes and Desserts
          </h2>
        </div>
        {/* Body Section */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center pb-3"
        >
          {ItemsData.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <div className="rounded 2xl bg-primary/60 dark:bg-white/10 hover:bg-primary dark:hover:bg-primary/20 dark:hover:text-white relative shadow-xl duration-340 group max-w-[300px]">
              {/* Image Section */}
              <div className="rounded-full mt-4 h-[200px] w-[300px]">
                <img
                  src={data.img}
                  alt=""
                  className="rounded-md max-w-[200px] h-[250px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* Details Section */}
              <div className="pb-4 text-center">
                {/* Star Rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold pt-1">{data.title}</h1>
                <p className="text-gray-700 duration-300 text-sm line-clamp-4 py-1 px-2 dark:text-gray-300">
                  {data.description}
                </p>
                <button className="bg-secondary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-secondary group-hover:text-black">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CakesAndDesserts;
