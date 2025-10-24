import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZoneSide from "./QZoneSide";









const RightAside = () => {
  return <div className=" space-y-8">
    <SocialLogin></SocialLogin>
    <FindUs></FindUs>
<QZoneSide></QZoneSide>
  </div>;
};

export default RightAside;
