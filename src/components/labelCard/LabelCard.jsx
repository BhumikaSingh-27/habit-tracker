import React from "react";
import "./label.css";
import { FaEdit } from "react-icons/fa";

const LabelCard = () => {
  return (
    <div className="label-edit">
      <label htmlFor="">Label 1</label>
      <div>
        <FaEdit />
      </div>
    </div>
  );
};

export default LabelCard;
