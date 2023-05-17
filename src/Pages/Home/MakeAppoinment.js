import React from "react";
import MakeAppoinments from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";

const MakeAppoinment = () => {
  return (
    <section
      className="grid lg:grid-cols-2 sm:grid-cols-1 justify-center items-center lg:mt-40"
      style={{
        backgroundImage: `url(${MakeAppoinments})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "20px",
      }}
    >
      <div>
        <img className="lg:block hidden lg:-mt-36" src={doctor} alt="" />
      </div>

      <div className=" px-5">
        <h1 className="text-primary font-bold text-2xl mb-4 mt-6">
          Appointment
        </h1>
        <h2 className="text-white font-bold text-3xl mb-4">
          Make an appointment Today
        </h2>
        <p className="text-white text-justify mb-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page.
        </p>
        <button className="btn btn-primary text-white font-bold mb-4">
          GET STARTED
        </button>
      </div>
    </section>
  );
};

export default MakeAppoinment;
