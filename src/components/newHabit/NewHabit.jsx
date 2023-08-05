import React from "react";
import "./newHabit.css";
import { RxCross1 } from "react-icons/rx";
import Button from "../button/Button";
import HabitInfo from "./HabitInfo";
import {
  closeCreateModal,
  createNewHabit,
} from "../../redux/createHabit/habitActionCreators";
import { connect, useSelector } from "react-redux";
import toastNotify from "../../utils/toastNotify";

const NewHabit = ({ closeModal, clickHandler }) => {
  const createNew = useSelector((state) => state.new);

  const submitHabit = () => {
    if (
      createNew.name &&
      createNew.startDate &&
      createNew.endDate &&
      createNew.label.length !== 0
    ) {
      clickHandler({
        ...createNew,
        completed: false,
        archive: false,
        trash: false,
      });
      closeModal();
    } else {
      toastNotify("error", "All fields are required!");
    }
  };
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
          <button className="button" onClick={submitHabit}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeCreateModal()),
    clickHandler: (obj) => dispatch(createNewHabit(obj)),
  };
};
export default connect(null, mapDispatchToProp)(NewHabit);
