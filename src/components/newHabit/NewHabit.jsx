import React from "react";
import "./newHabit.css";
import { RxCross1 } from "react-icons/rx";
import Button from "../button/Button";
import HabitInfo from "./HabitInfo";
import { closeCreateModal } from "../../redux/createHabit/habitActionCreators";
import { connect } from "react-redux";

const NewHabit = ({ closeModal }) => {
  return (
    <div className="modal-container">
      <div className="new-habit-container">
        <div className="new-habit-header">
          {" "}
          <h2>New Habit</h2>{" "}
          <span onClick={() => closeModal()}>
            <RxCross1 />
          </span>
        </div>
        <hr />
        <HabitInfo />

        <div className="btn-new">
          <Button text={"Done"} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeCreateModal()),
  };
};
export default connect(null, mapDispatchToProp)(NewHabit);
