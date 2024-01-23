import React from "react";
import Image from "next/image";
const OurServiceCard = ({ text, icon }) => {
  return (
    <div className="shadow-ourservice flex flex-col  justify-between rounded items-center w-[250px] p-10 my-10">
      <Image src={icon} width={100} height={100} alt="icon for our service" />
      <p className="text-center">
        {text}
      </p>
    </div>
  );
};

export default OurServiceCard;
