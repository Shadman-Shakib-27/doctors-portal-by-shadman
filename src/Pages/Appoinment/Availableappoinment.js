import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";

const Availableappoinment = ({ date }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-64">
      <h1 className="text-primary font-bold ml-8 text-center lg:text-center">
        Available Services On {format(date, "PPP")}.
      </h1>
      <h1 className="text-center ml-8 mt-2">Please Select A Service.</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:px-10 lg:ml-5 gap-5">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Availableappoinment;
