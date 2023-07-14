import React from "react";
import "./newHabit.css";
import { RxCross1 } from "react-icons/rx";
import Button from "../button/Button";
import HabitInfo from "./HabitInfo";

const NewHabit = () => {
  return (
    <div className="new-habit-container">
      <div className="new-habit-header">
        {" "}
        <h2>New Habit</h2>{" "}
        <span>
          <RxCross1 />
        </span>
      </div>
      <hr />
      <HabitInfo />

      <div className="btn-new">
        <Button text={"Done"} />
      </div>
    </div>
  );
};

export default NewHabit;
