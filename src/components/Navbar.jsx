import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="right_side">
      <div className="navbar_left">
        <img src="./kate.jpg" className="avatar" />

        <div className="navbar_profile">
          <p className="navbar_name">Kate Winslet</p>
          <p className="ceo">CEO / Co-Founder</p>
        </div>
      </div>

      <div className="navbar_buttons">
        <button className="navbar_btn">
          <AiFillHome className="navbar_icons" />
          App
        </button>
        <button className="navbar_btn">
          <IoMdMail className="navbar_icons" />
          Message
        </button>
        <button className="navbar_btn">
          <IoIosSettings className="navbar_icons" />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Navbar;
