import React from "react";
import HabitCard from "../../components/HabitCard/HabitCard";
import SearchBar from "../../components/searchbar/SearchBar";

const Archive = () => {
  return (
    <div className="label-container">
      <div>
        <SearchBar />
      </div>
      <div>
        <h2 className="padding-1">Archive</h2>
        <div className="count-container">
          {/* <HabitCard />
          <HabitCard />
          <HabitCard />
          <HabitCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Archive;
