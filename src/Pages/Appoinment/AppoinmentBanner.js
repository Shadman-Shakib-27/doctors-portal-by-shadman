import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bg from '../../assets/images/bg.png'
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppoinmentBanner = ({date,setDate}) => {

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        height:'340px'
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="shadow-2xl lg:ml-20"
          style={{ width: "594px" }}
          src={chair}
          alt=""
        />
        <div className="lg:ml-10">
          {/* Date And Calender => react-day-picker  */}
          <DayPicker
            className="p-5 rounded-lg shadow-2xl "
            mode="single"
            selected={date}
            onSelect={setDate}
          />
          {/* <p className="ml-6 mt-7">
            You Selected{" "}
            <span className="font-bold">.</span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
