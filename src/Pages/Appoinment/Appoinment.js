import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppoinmentBanner from "./AppoinmentBanner";
import Availableappoinment from "./Availableappoinment";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
      <Availableappoinment date={date}></Availableappoinment>
      <Footer></Footer>
    </div>
  );
};

export default Appoinment;
