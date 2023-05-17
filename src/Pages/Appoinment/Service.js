import React from "react";

const Service = ({ service }) => {
  return (
   // lg:max-w-lg Width Thik Korar Jonne
    <div className="card lg:max-w-lg shadow-lg border py-5 my-5 ">
      <div className="card-body">
        <h2 className="card-title text-primary justify-center font-bold">
          {service.name}
        </h2>
      </div>
    </div>
  );
};

export default Service;
