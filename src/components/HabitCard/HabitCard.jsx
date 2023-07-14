import React from "react";
import "./habit.css";

const HabitCard = () => {
  return (
    <div>
      <div className="habit-container">
        <div className="habit-title">
          <h2>task #1</h2>{" "}
          <div className="done-tick">
            {" "}
            <svg
              width="24"
              height="22"
              top="1.41px"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4984 0.40625L9.50156 14.9047L3 8.40781L0 11.4078L9.99844 21.4062L24 3.40625L20.4984 0.40625Z"
                fill="#60A5FA"
              />
            </svg>
          </div>
        </div>
        <div className="habit-label">
          <h5>label</h5>
          <h5>label</h5>
          <h5>label</h5>
        </div>
        <div className="habit-description">0/2 times a day</div>
      </div>
    </div>
  );
};

export default HabitCard;
