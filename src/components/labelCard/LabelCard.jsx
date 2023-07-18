import React from "react";
import "./label.css";
import { FaEdit } from "react-icons/fa";

const LabelCard = () => {
  return (
    <div className="label-display">
      <label htmlFor="">Label 1</label>
      <div className="edit-label">
        <FaEdit />
      </div>
    </div>
  );
};

export default LabelCard;
