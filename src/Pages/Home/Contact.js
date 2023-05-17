import React from "react";
import background from "../../../src/assets/images/appointment.png";

const Contact = () => {
  return (
    <div
      className="mt-28 lg:w-lg-max"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "550px",
        borderRadius:'20px'
      }}
    >
      <div className="text-center p-4">
        <h1 className="text-xl text-primary mt-4">Contact Us</h1>
        <h1 className="lg:text-3xl text-2xl text-white ">
          {" "}
          Stay Connected With Us
        </h1>
        <form className="mt-6">
          <input
            className="bg-white w-full max-w-md p-3 rounded-lg "
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            required
          />{" "}
          <br /> <br />
          <input
            className="bg-white w-full max-w-md p-3 rounded-lg "
            type="text"
            name=""
            id=""
            placeholder="Subject"
          />{" "}
          <br /> <br />
          <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
          <br /> <br />
          <input
            className="text-white text-xl bg-primary p-2 w-28 rounded-md"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
