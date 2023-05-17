import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-justify">{review.review}</p>
        <div className="flex mt-6 w-50">
          <div className="avatar">
            <div className="lg:w-22 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div className="px-5 mt-2 ">
            <h2 className="text-xl font-semibold">{review.name}</h2>
            <h2>{review.location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
