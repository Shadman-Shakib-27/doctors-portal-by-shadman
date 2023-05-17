import React from "react";
import treatment from "../../assets/images/treatment.png";

const MoreCard = () => {
  return (
    <div className="card grid lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:card-side  mt-28 xl:px-56">
      <figure>
        <img
          className="px-5"
          style={{ borderRadius: "20px" }}
          src={treatment}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl font-bold lg:mt-5 mb-2">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="text-xl text-justify lg:mt-4 mb-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div>
          <button className="btn btn-primary text-white font-bold ">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreCard;
