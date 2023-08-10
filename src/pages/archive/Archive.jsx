import React from "react";
import HabitCard from "../../components/HabitCard/HabitCard";
import SearchBar from "../../components/searchbar/SearchBar";
import { useSelector } from "react-redux";

const Archive = () => {
  const state = useSelector((state) => state.habit);
  return (
    <div className="label-container">
      <div>
        <SearchBar />
      </div>
      <div>
        <h2 className="padding-1">Archive</h2>
        <div className="count-container">
          {state.archive.map((data) => (
            <HabitCard key={data._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archive;
