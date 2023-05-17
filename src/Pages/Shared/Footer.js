import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div
      className=" lg:mt-10"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <footer className="footer justify-between p-10  text-base-content mb-">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover pe-none">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title"> OUR Address</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
      <footer>
        <p className="text-center text-black">
          Copyright © 2023 - All Right Reserved By{" "}
          <span className="text-primary font-serif font-semibold">
            Shadman Shakib
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
