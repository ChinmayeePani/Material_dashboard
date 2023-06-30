import React from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { MdTableView } from "react-icons/md";
import { HiNewspaper } from "react-icons/hi";
import { ImRtl } from "react-icons/im";
import { AiFillBell } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { VscSignIn } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";


const Sidebar = () => {
  // const dashboardHandler = () => {
  //   navigate("/Mainbody"); onClick={dashboardHandler}
  // };
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar_header">
          <HiSquares2X2 className="logo1" />
          <span>Material Dashboard 2</span>
        </div>
        <hr className="sidebar_hr" />

        <div className='listItems'>
          <div className='listItem'>
            <MdDashboard className="icons" /> <span className="lists">Dashboard</span> <br />
          </div>

          <div className='listItem'>
            <MdTableView className="icons" /> <span className="lists">Tables</span> <br />
          </div>

          <div className='listItem'>
            <HiNewspaper className="icons" /> <span className="lists">Billings</span> <br />
          </div>

          <div className='listItem'>
            <ImRtl className="icons" /> <span className="lists">RTL</span> <br />
          </div>

          <div className='listItem'>
            <AiFillBell className="icons" /> <span className="lists">Notifications</span> <br />
          </div>

          <div className='listItem_profile'>
            <FaUser className="icons" /> <span className="lists">Profile</span> <br />
          </div>

          <div className='listItem'>
            <VscSignIn className="icons" /> <span className="lists">Sign In</span> <br />
          </div>

          <div className='listItem'>
            <VscSignOut className="icons" /> <span className="lists">Sign Up</span> <br />
          </div>
        </div>
      </div>

      <button className="button_pro">UPGRADE TO PRO</button>
    
    </div>
      
  );
};

export default Sidebar;
