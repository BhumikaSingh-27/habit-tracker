import React from "react";
import "./label.css";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const LabelCard = () => {
  return (
    <div className="label-display">
      <label htmlFor="">Label 1</label>
      <div className="edit-label">
        <div>
          <FaEdit />
        </div>
        <div>
          <AiFillDelete />
        </div>
      </div>
    </div>
  );
};

export default LabelCard;
