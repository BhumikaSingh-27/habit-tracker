import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import {
  addColor,
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
  addColor,
  addGoal,
  addRepeat,
  addLabel,
}) => {
  return (
    <div className="new-habit-body">
      <p className="label">Name</p>
      <input
        type="text"
        placeholder="Enter name of your habit"
        className="input"
        onChange={(e) => addName(e.target.value)}
      />
      <p className="label">Start Date:</p>
      <input
        type="date"
        className="input"
        onChange={(e) => addStart(e.target.value)}
      />
      <p className="label">End Date:</p>
      <input
        type="date"
        className="input"
        // value={newHabit.endDate}
        onChange={(e) => addEnd(e.target.value)}
      />
      <p className="label">Goal:</p>
      <select onChange={(e) => addGoal(e.target.value)}>
        <option value="1 times">1 times</option>
        <option value="2 times">2 times</option>
      </select>
      <p className="label">Repeat:</p>
      <select onChange={(e) => addRepeat(e.target.value)}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <p className="label">Color:</p>
      <select onChange={(e) => addColor(e.target.value)}>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
      </select>
      <p className="label">Select Labels</p>
      <div className="display-flex">
        <input
          type="checkbox"
          value="label 1"
          onChange={(e) => addLabel(e.target.value)}
        />
        <span>Label 1</span>
      </div>
      <div className="display-flex">
        <input
          type="checkbox"
          value="label 2"
          onChange={(e) => addLabel(e.target.value)}
        />
        <span>Label 2</span>
      </div>
      <div className="display-flex">
        <input
          type="checkbox"
          value="label 3"
          onChange={(e) => addLabel(e.target.value)}
        />
        <span>Label 3</span>
      </div>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => {
  return {
    addName: (data) => dispatch(addName(data)),
    addStart: (data) => dispatch(addStartDate(data)),
    addEnd: (data) => dispatch(addEndDate(data)),
    addGoal: (data) => dispatch(addGoal(data)),
    addRepeat: (data) => dispatch(addRepeat(data)),
    addColor: (data) => dispatch(addColor(data)),
    addLabel: (data) => dispatch(addLabel(data)),
  };
};
export default connect(null, mapDispatchToProp)(HabitInfo);
