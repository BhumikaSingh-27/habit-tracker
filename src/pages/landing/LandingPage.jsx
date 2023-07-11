import React from "react";
import "./landing.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">this is div</div>
      <div>
        <img
          id="landing-img"
          src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1689063164/NegProjects/HabitTracker/undraw_activity_tracker_re_2lvv_hqgpwg.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingPage;
