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
      <div>
        <LabelCard />
        <LabelCard />
      </div>
    </div>
  );
};

export default Label;
