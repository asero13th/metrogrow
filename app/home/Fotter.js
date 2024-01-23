import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Fotter = () => {
  return (
    <div className="flex justify-around bg-custom-green items-center  min-h-[50vh] mt-auto w-full wrap">
      <div className="flex">
        <div className="flex flex-col mx-16">
          <h1
            className="text-white text-2xl my-5 py-5 text-lg text-white"
            style={{ fontSize: "36px" }}
          >
            Metro Grow
          </h1>
          <p className="text-white font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex justify-between w-1/2 text-white my-5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-full h-full" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.telegram.org"
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>

        <div className="flex">
          <div className="mx-10">
            <h1 className="text-white text-2xl py-5 text-lg">Contact Us</h1>
            <p className="text-white font-light">Phone: +880 123456789</p>
            <p className="text-white font-light">
              Email: aserhailu2020@gmail.com
            </p>
          </div>
          <div className="mx-10">
            <h1 className="text-white text-2xl py-5 text-lg ">Pages</h1>
            <p className="text-white font-light">Home</p>
            <p className="text-white font-light">About</p>
            <p className="text-white font-light">Product</p>
            <p className="text-white font-light">Blog</p>
          </div>
          <div className="mx-10">
            <h1 className="text-white text-2xl py-5 text-lg">About</h1>
            <p className="text-white font-light">Testmonials</p>
            <p className="text-white font-light">Our Services</p>
            <p className="text-white font-light">Contact us</p>
            <p className="text-white font-light">Benefit</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Fotter;
