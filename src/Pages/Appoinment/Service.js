import React from "react";

const Service = ({ service, setTreatment }) => {
  return (
    // lg:max-w-lg Width Thik Korar Jonne
    <div className="card lg:max-w-lg shadow-lg border py-5 my-5 ">
      <div className="card-body">
        <h2 className="card-title text-primary justify-center font-bold">
          {service.name}
        </h2>
        {/* Conditional Rendering */}
        <h1 className="text-center">
          {service.slots.length > 0 ? (
            <span>{service.slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Date.</span>
          )}
        </h1>
        <p className="text-center">
          {service.slots.length} {service.slots.length > 0 ? "Spaces" : "Space"}{" "}
          Available.
        </p>
        {/* Button Disabled Korar Jonne. */}

        <label
          onClick={() => setTreatment(service)}
          disabled={service.slots.length === 0}
          htmlFor="booking-modal"
          className="btn btn-primary text-white font-bold mt-8"
        >
          BOOK APPOINMENT
        </label>
      </div>
    </div>
  );
};

export default Service;
