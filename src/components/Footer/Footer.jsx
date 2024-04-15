// eslint-disable-next-line no-unused-vars
import React from "react";
import FooterLogo from "../../assets/DreamyDrizzlesLogo_Footer.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Top Rated",
    link: "/#top_rated",
  },
];

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="grid md:grid-cols-3 pv-44 pt-5">
          {/* Company Details */}
          <div className="pt-2 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-primary">
              <img src={FooterLogo} alt="" className="max-w-[50px]" />
              Dreamy Drizzles
            </h1>
            <p className="text-white/50 text-sm pr-3 pt-2">
              At Dreamy Drizzles, we bake yummy breads, tasty pastries, and
              delicious cakes. We also have yummy desserts and drinks. Come
              enjoy our treats!
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              {/* Important Links */}
              <div className="mt-6 pl-8 ml-8">
                <ul>
                  {FooterLinks.map((link) => (
                    <li
                      className="pb-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-white/50"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Contact Details */}
            <div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-2 text-white/50">
                  <MdCall />
                  <p>011-2284782 / 011-2236781</p>
                </div>
                <div className="flex items-center gap-3 mb-2 text-white/50">
                  <MdEmail />
                  <p>dreamydrizzles@info.com</p>
                </div>
                <div className="flex items-center gap-3 mb-2 text-white/50">
                  <FaLocationDot />
                  <p>No:347/A, De Mel Road, Colombo 10</p>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div>
              <div className="flex justify-end gap-3 mt-6 mr-3 text-white/50">
                <a href="#">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#">
                  <FaYoutube className="text-2xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* CopyRight Section */}
        <div className="text-white/50 text-sm text-center pt-8 pb-3">
          <p>&copy; 2024 Shivanthi Fernando. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
