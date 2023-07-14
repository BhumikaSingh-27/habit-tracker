import React from "react";

const HabitInfo = () => {
  return (
    <div className="new-habit-body">
      <p className="label">Name</p>
      <input
        type="text"
        placeholder="Enter name of your habit"
        className="input"
      />
      <p className="label">Start Date:</p>
      <input
        type="date"
        placeholder="enter name of your habit"
        className="input"
      />
      <p className="label">End Date:</p>
      <input
        type="date"
        placeholder="enter name of your habit"
        className="input"
      />
      <p className="label">Goal:</p>
      <select>
        <option value="">1 times</option>
        <option value="">2 times</option>
      </select>
      <p className="label">Repeat:</p>
      <select>
        <option value="">Daily</option>
        <option value="">Weekly</option>
        <option value="">Monthly</option>
      </select>
      <p className="label">Color:</p>
      <select>
        <option value="">Blue</option>
        <option value="">Red</option>
        <option value="">Yellow</option>
        <option value="">Green</option>
      </select>
      <p className="label">Select Labels</p>
      <div className="display-flex">
        <input type="checkbox" />
        <span>Label 1</span>
      </div>
      <div className="display-flex">
        <input type="checkbox" />
        <span>Label 2</span>
      </div>
      <div>
        <input type="checkbox" />
        <span>Label 3</span>
      </div>
    </div>
  );
};

export default HabitInfo;
