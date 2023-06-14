import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card lg:card-side bg-primary shadow-xl mx-4 xl:p-4 ${bgClass}`}>
      <figure className="mt-5 pl-5">
        <img src={img} alt="Shadman"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{cardTitle}</h2>
        <p className=" text-white">
          Lorem Ipsum is simply dummy text of the pri..
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
