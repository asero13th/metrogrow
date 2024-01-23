import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <div className="flex items-center mt-10 justify-between container px-10 flex-wrap">
      <div className="mx-10 p-10">
        <h1 className=" font-bold text-custom-green font-bold text-6xl font-bold ">
          Our Passion for <br />
          Agriculture <br />
          Nurturing <br />
          Growth and <br />
          Sustaining the <br />
          Future
        </h1>
        <p className="font-light text-sm my-6 text-custom-green">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. <br />
          Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
        </p>

        <button className="px-6 py-2 mr-5 bg-custom-green border-custom-green border-2 text-white rounded font-light">
          Get Started
        </button>
      </div>
      <div className="relative">
        <Image
          className=""
          src="/myfield.png"
          alt="field image"
          width={550}
          height={500}
        />
        <p className="absolute bottom-[9%] left-[30%] px-10 bg-white bg-opacity-50 font-bold rounded shadow-custom   p-2 text-2xl text-custom-green">
          Since 2024
        </p>
      </div>
    </div>
  );
};

export default Services;
