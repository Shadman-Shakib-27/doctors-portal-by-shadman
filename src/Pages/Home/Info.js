import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../src/assets/icons/clock.svg";
import map from "../../../src/assets/icons/marker.svg";
import phone from "../../../src/assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6  ">
      <InfoCard cardTitle="Opening Hours" img={clock}></InfoCard>
      <InfoCard
        cardTitle="Visit our location"
        bgClass="bg-accent"
        img={map}
      ></InfoCard>
      <InfoCard cardTitle="Contact us now" img={phone}></InfoCard>
    </div>
  );
};

export default Info;
