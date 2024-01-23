import React from "react";
import Image from "next/image";
const Expertise = () => {
  return (
    <div className="flex items-center mt-20 justify-around container px-10 flex-wrap mb-10 ">
      <div className="mx-10 p-10">
        <h1 className=" font-bold text-custom-green font-bold text-6xl font-bold ">
          The Benefits <br />
          of Choosing <br />
          Our Expertise
        </h1>
        <p className="font-light text-sm mb-10 my-5 text-custom-green">
          Li Europan lingues es membres del sam familie.
          <br /> Lor separat existentie es un myth. Por scientie, <br />
          musica, sport etc, litot Europa usa li sam vocabular.
        </p>

        <button className="px-6 py-2 mr-5 bg-custom-green border-custom-green border-2 text-white rounded font-light">
          Learn More
        </button>
      </div>
      <div className="flex flex-col bg-custom-green rounded px-10">
        <div className="flex p-6">
          <Image
            src="/rating.png"
            alt="expertise image p-2"
            width={70}
            height={70}
          />
          <div className="p-3">
            <h2 className="text-4xl font-bold text-white">15+</h2>
            <p className="text-white text-xs ">Years of Experience</p>
          </div>
        </div>
        <div className="flex p-6">
          <Image
            src="/product.png"
            alt="expertise image p-2"
            width={70}
            height={70}
          />
          <div className="p-3">
            <h2 className="text-4xl font-bold text-white">40+</h2>
            <p className="text-white text-xs ">products</p>
          </div>
        </div>
        <div className="flex p-6">
          <Image
            src="/right.png"
            alt="expertise image p-2"
            width={70}
            height={70}
          />
          <div className="p-3">
            <h2 className="text-4xl font-bold text-white">2000+</h2>
            <p className="text-white text-xs ">Clients</p>
          </div>
        </div>
        <div className="flex p-6">
          <Image
            src="/local-team.png"
            alt="expertise image p-2"
            width={70}
            height={70}
          />
          <div className="p-3">
            <h2 className="text-4xl font-bold text-white">10+</h2>
            <p className="text-white text-xs ">local team members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
