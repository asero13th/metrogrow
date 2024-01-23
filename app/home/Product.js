import React from "react";

const Product = () => {
  return (
    <div className="bg-product-background min-h-[70vh] bg-covor bg-center w-100 mt-12 flex flex-col items-start p-20">
      <h1 className="text-6xl font-bold text-white mb-20">
        Sustainable Farming <br /> Meets Technology: <br />
        Building a Greener Future
      </h1>

        <div className="flex justify-center">
            <button className="px-6 py-2 mr-5 bg-custom-green border-custom-green border-2 text-white rounded font-light">
                Get Started
            </button>
            <button className="px-6 py-2 border-white border-2 text-white rounded font-light">
                contact us
            </button>
        </div>
    </div>
  );
};

export default Product;