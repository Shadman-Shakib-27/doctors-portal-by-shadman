import React from "react";
import chair from "../../assets/images/chair.png";
import background from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen xl:mt-10 mb-8 "
      style={{
        backgroundImage: `url(${background})`,
        height: "635px",
      }}
    >
      <div class="hero-content xl:ml-8 flex-col lg:flex-row-reverse">
        <img
          className="mt-8 lg:w-100  ml-4 rounded-lg shadow-2xl"
          width="600px"
          src={chair}
          alt="Shadman"
        />
        <div>
          <h2 class="text-4xl font-bold mt-4">Your New Smile Starts Here!!</h2>
          <p class="py-6 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the.
          </p>
          <button class="btn btn-primary text-white font-bold bg-primary border-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
