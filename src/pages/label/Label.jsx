import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import "./label.css";
import LabelCard from "../../components/labelCard/LabelCard";

const Label = () => {
  return (
    <div className="label-container">
      <div>
        <SearchBar />
      </div>
      

      <div className="label-list">
      <div className="label-display label-padding">
        <h2>Labels</h2> <h3>+Create Label</h3>
      </div>
        <LabelCard />
        <LabelCard />
      </div>
    </div>
  );
};

export default Label;
