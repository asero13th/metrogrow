import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero-image bg-cover bg-center min-h-[85vh] top-10 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-white text-center p-10">
        The Role of Technology <br />
        in Revolutionizing
        <br /> Agriculture
      </h1>
      <p className="text-white font-light p-10 text-center">
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth. <br />
        Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
      </p>
      <div>
        <button className="px-6 py-2 mr-5 bg-custom-green border-custom-green border-2 text-white rounded font-light">
          Get Started
        </button>
        <button className="px-6 py-2 border-white border-2 text-white rounded font-light">
          Learn More
        </button>
      </div>
    </div>
  );
};
export default Hero;
