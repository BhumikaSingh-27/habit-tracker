import React from "react";
import "./sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdLabelOutline } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigation()

  return (
    <div>
      <div className="nav-container">
        <div className="nav-content-container">
          <div className="nav-content">
            <div>
              <AiOutlineHome />{" "}
            </div>
            <div>Home</div>
          </div>
          <div className="nav-content">
            <MdLabelOutline />
            Labels
          </div>
          <div className="nav-content" onClick={navigate("/")}>
            <BsArchive />
            Archive
          </div>
          <div className="nav-content">
            <BsTrash3 />
            Trash
          </div>
        </div>
        <div className="nav-profile-container">
          <div className="nav-profile-info">
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
