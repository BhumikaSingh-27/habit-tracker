import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import {
  addEndDate,
  addGoal,
  addLabel,
  addName,
  addRepeat,
  addStartDate,
} from "../../redux/newHabit/newHabitActionCreators";

const HabitInfo = ({
  addName,
  addStart,
  addEnd,
  addGoal,
  addRepeat,
  addLabel,
  name,
  startDate,
  endDate,
  goal,
  repeat,
  label,
}) => {
  return (
    <div className="new-habit-body">
      <p className="label">Name</p>
      <input
        type="text"
        placeholder="Enter name of your habit"
        className="input"
        value={name}
        onChange={(e) => addName(e.target.value)}
      />
      <p className="label">Start Date:</p>
      <input
        type="date"
        className="input"
        value={startDate}
        onChange={(e) => addStart(e.target.value)}
      />
      <p className="label">End Date:</p>
      <input
        type="date"
        className="input"
        value={endDate}
        onChange={(e) => addEnd(e.target.value)}
      />
      <p className="label">Goal:</p>
      <select value={goal} onChange={(e) => addGoal(e.target.value)}>
        <option value="none" disabled hidden>
          Select an option
        </option>
        <option value="1 times">1 times</option>
        <option value="2 times">2 times</option>
      </select>
      <p className="label">Repeat:</p>
      <select value={repeat} onChange={(e) => addRepeat(e.target.value)}>
        <option value="none" disabled hidden>
          Select an option
        </option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <p className="label">Select Labels</p>
      <div className="display-flex">
        <input
          type="checkbox"
          value="label 1"
          onChange={(e) => addLabel(e.target)}
          checked={label?.find((ele) => ele === "label 1")}
        />
        <span>Label 1</span>
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  console.log(state.new);
  return {
    name: state.new.name,
    startDate: state.new.startDate,
    endDate: state.new.endDate,
    goal: state.new.goal,
    repeat: state.new.repeat,
    label: state.new.label,
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    addName: (data) => dispatch(addName(data)),
    addStart: (data) => dispatch(addStartDate(data)),
    addEnd: (data) => dispatch(addEndDate(data)),
    addGoal: (data) => dispatch(addGoal(data)),
    addRepeat: (data) => dispatch(addRepeat(data)),
    addLabel: (data) => dispatch(addLabel(data)),
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(HabitInfo);
