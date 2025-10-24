import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className=" font-bold mb-5">Find Us on</h2>
      <div>
        <div className="join join-vertical lg:join-vertical w-full">
          <button className="btn bg-base-100 justify-start  join-item "><FaFacebook></FaFacebook> Facebook</button>
          <button className="btn  bg-base-100 justify-start join-item w-full"><FaTwitter></FaTwitter> Twitter</button>
          <button className="btn bg-base-100 justify-start  join-item w-full">
            <FaInstagram></FaInstagram> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
