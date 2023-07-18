import React from "react";
import "./sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdLabelOutline } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate, useNavigation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="nav-container">
        <div className="nav-content-container">
          <div className="nav-content" onClick={() => navigate("/home")}>
            <AiOutlineHome /> Home
          </div>
          <div className="nav-content" onClick={() => navigate("/labels")}>
            <MdLabelOutline />
            Labels
          </div>
          <div className="nav-content" onClick={() => navigate("/archive")}>
            <BsArchive />
            Archive
          </div>
          <div className="nav-content" onClick={() => navigate("/trash")}>
            <BsTrash3 />
            Trash
          </div>
        </div>
        <div className="nav-profile-container">
          <div className="nav-profile-info" onClick={()=>navigate("/profile")}>
            <div className="nav-profile">
              <img
                src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1687433601/NegProjects/SocialMedia/girl_pbevto.png"
                alt=""
                className="nav-profile-pic"
              />
              <div>
                <h4>name</h4>
                <span>@username</span>
              </div>
            </div>
            <div className="logout">
              <AiOutlineLogout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
