// eslint-disable-next-line no-unused-vars
import React from "react";
import Img1 from "../../assets/best_selling_items_img/BlackForestCake_1.jpeg";
import Img2 from "../../assets/best_selling_items_img/Croissant_2.jpg";
import Img3 from "../../assets/best_selling_items_img/BelgianWaffles_3.jpg";
import Img4 from "../../assets/best_selling_items_img/CherryPie_4.jpg";
import { FaStar } from "react-icons/fa6";

const BestSellingItemsData = [
  {
    id: 1,
    img: Img1,
    title: "Black Forest Cake",
    rating: 4.5,
    price: "$35",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Croissant",
    rating: 5.0,
    price: "$12",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Belgian Waffles",
    rating: 4.9,
    price: "$18",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Cherry Pie",
    rating: 4.8,
    price: "$25",
    aosDelay: "600",
  },
];

const BestSeller = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white duration-200 relative z-40">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2
            data-aos="fade-up"
            className="pt-8 text-3xl font-bold dark:text-primary"
          >
            Best Selling Items
          </h2>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-4">
            {/* Card Section */}
            {BestSellingItemsData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold mt-1">
                    {data.title}
                  </h3>
                  <div className="flex">
                    <FaStar className="text-yellow-400 mt-1 mr-1" />
                    <span>{data.rating}</span>
                  </div>
                  <p className="mb-3 text-md text-gray-800 dark:text-white">
                    {data.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
