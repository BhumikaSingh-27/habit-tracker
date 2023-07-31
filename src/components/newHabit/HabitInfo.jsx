import React, { useState } from "react";

const HabitInfo = () => {
  const [newHabit, setNewHabit] = useState({
    id: "",
    name: "",
    startDate: "",
    endDate: "",
    goal: "1 times",
    repeat: "daily",
    color: "blue",
    label: [],
  });

  console.log(newHabit)
  return (
    <div className="new-habit-body">
      <p className="label">Name</p>
      <input
        type="text"
        placeholder="Enter name of your habit"
        className="input"
        value={newHabit.name}
        onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
      />
      <p className="label">Start Date:</p>
      <input
        type="date"
        className="input"
        value={newHabit.startDate}
        onChange={(e) =>
          setNewHabit({ ...newHabit, startDate: e.target.value })
        }
      />
      <p className="label">End Date:</p>
      <input
        type="date"
        className="input"
        value={newHabit.endDate}
        onChange={(e) => setNewHabit({ ...newHabit, endDate: e.target.value })}
      />
      <p className="label">Goal:</p>
      <select
        onChange={(e) => setNewHabit({ ...newHabit, goal: e.target.value })}
      >
        <option value="1 times">1 times</option>
        <option value="2 times">2 times</option>
      </select>
      <p className="label">Repeat:</p>
      <select
        onChange={(e) => setNewHabit({ ...newHabit, repeat: e.target.value })}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <p className="label">Color:</p>
      <select
        onChange={(e) => setNewHabit({ ...newHabit, color: e.target.value })}
      >
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
          onChange={(e) =>
            setNewHabit((prev) => ({
              ...newHabit,
              label: [...prev.label, e.target.value],
            }))
          }
        />
        <span>Label 1</span>
      </div>
      <div className="display-flex">
        <input
          type="checkbox"
          value="label 2"
          onChange={(e) =>
            setNewHabit((prev) => ({
              ...newHabit,
              label: [...prev.label, e.target.value],
            }))
          }
        />
        <span>Label 2</span>
      </div>
      <div className="display-flex">
        <input
          type="checkbox"
          value="label 3"
          onChange={(e) =>
            setNewHabit((prev) => ({
              ...newHabit,
              label: [...prev.label, e.target.value],
            }))
          }
        />
        <span>Label 3</span>
      </div>
    </div>
  );
};

export default HabitInfo;
