import React from "react";
import OurServiceCard from "../components/OurServiceCard";
const OurServices = () => {
  const ourServices = [
    {
      text: "Crop Production",
      icon: "/blogicon.png",
    },

    {
      text: "Farming startegy",
      icon: "/content.png",
    },
    {
      text: "custom agricultural Production",
      icon: "/featured.png",
    },
    {
      text: "Agro-Processing",
      icon: "/website.png",
    },
  ];
  return (
    <div className="container mt-10">
      <div className="flex flex-col items-center my-10 mx-10">
        <h1 className="text-6xl font-bold text-custom-green font-bold text-center p-1">
          Our Services
        </h1>
        <p className="text-center font-light font-custom-green">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. <br />
          Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
        </p>
      </div>
      <div className="flex  my-15 mx-10 justify-around flex-wrap">
        {ourServices.map((service, index) => (
          <OurServiceCard key={index} text={service.text} icon={service.icon} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
