import React from "react";
import "./MainBody.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import ToggleButton from "./ToggleButton";

const MainBody = () => {
  return (
    <div className="mainbody_container">
      {/* 1st BOX */}
      <div className="platform_contents">
        <h3>Platform Settings</h3>
        <h6>ACCOUNT</h6>

        <div className="toggle_contents">
          <ToggleButton /> <p>Email me when someone follows me</p>
        </div>
        <div className="toggle_contents">
        <ToggleButton /> <p>Email me when someone answers my posts</p>
        </div>
        <div className="toggle_contents">
          <ToggleButton/> <p>Email me when someone mentions me</p>
        </div>

        <h6>APPLICATIONS</h6>
        <div className="toggle_contents">
          <ToggleButton /> <p>New launches and projects</p>
        </div>
        <div className="toggle_contents">
          <ToggleButton /> <p>Monthly product updates</p>
        </div>
        <div className="toggle_contents">
          <ToggleButton /> <p>Subscribe to newsletter</p>
        </div>
      </div>

      {/* 2nd BOX */}
      <div className="platform_contents">
        <h3>Profile Information</h3>
        <p className="profile_info">
          Among her numerous accolades for her performances, Winslet has won an Oscar, two Emmys, a
          Grammy, three Critics' Choice's, two AACTAs, three BAFTAs, five Golden Globes, four Screen
          Actors Guild Awards and a Producers Guild Award.
        </p>

        <div className="toggle_contents">
          <span className="data_heading">Full Name:</span> <p>Kate Winslet</p>
        </div>

        <div className="toggle_contents">
          <span className="data_heading">Mobile Number:</span> <p>+91 71232143414</p>
        </div>

        <div className="toggle_contents">
          <span className="data_heading">Email:</span> <p>kate@gmail.com</p>
        </div>

        <div className="toggle_contents">
          <span className="data_heading">Country:</span> <p>USA</p>
        </div>

        <div className="toggle_contents">
          <span className="data_heading">Social:</span>

          <BsFacebook className="fb" />
          <BsTwitter className="twitter" />
          <BsInstagram className="insta" />
        </div>
      </div>

      {/* 3rd BOX */}

      <div className="platform_contents">
        <h3>Conversations</h3>
        <div className="avatar_group">
          <img src="./1.jpg" className="avatar" />
          <div className="avatars_details">
            <span>James Bond</span>
            <div className="second_line">
              <p>I need more information</p> <h5>REPLY</h5>
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div className="avatar_group">
          <img src="./2.jpg" className="avatar" />
          <div className="avatars_details">
            <span>Marie</span>
            <div className="second_line">
              <p>Awesome work, can you?</p> <h5>REPLY</h5>
            </div>
          </div>
        </div>

        {/* 3rd */}
        <div className="avatar_group">
          <img src="./3.jpg" className="avatar" />
          <div className="avatars_details">
            <span>Emma Watson</span>
            <div className="second_line">
              <p>About files, I can</p> <h5>REPLY</h5>
            </div>
          </div>
        </div>

        {/* 4th */}
        <div className="avatar_group">
          <img src="./4.jpg" className="avatar" />
          <div className="avatars_details">
            <span>John Wick</span>
            <div className="second_line">
              <p>Good afternoon, everyone!</p> <h5>REPLY</h5>
            </div>
          </div>
        </div>

        {/* 5th */}
        <div className="avatar_group">
          <img src="./5.jpg" className="avatar" />
          <div className="avatars_details">
            <span>Harry Potter</span>
            <div className="second_line">
              <p>See you soon!</p> <h5>REPLY</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
