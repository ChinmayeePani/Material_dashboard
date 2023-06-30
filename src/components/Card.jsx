import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div>
      <h3 className="project">Projects</h3>
      <p className="lower_para">Architect Design Houses</p>

      {/* CARDS CONTAINER */}
      <div className="cards_container">
        {/* 1st CARD */}
        <div className="card_contents">
          <img src="./home1.jpg" className="card_image" />
          <p>Project #1</p>
          <span>Modern</span>
          <p>
            The Modern House is an estate agency that helps people live in more thoughtful and
            beautiful ways.
          </p>

          <div className="btn_avatars">
            <button className="card_buttons">VIEW PROJECT</button>
            <div className="avatars_collection">
              <img src="./1.jpg" className="avatar_image" />
              <img src="./2.jpg" className="avatar1_image" />
              <img src="./3.jpg" className="avatar2_image" />
              <img src="./4.jpg" className="avatar3_image" />
              <img src="./1.jpg" className="avatar4_image" />
            </div>
          </div>
        </div>

        {/* 2nd CARD */}
        <div className="card_contents">
          <img src="./home2.jpg" className="card_image" />
          <p>Project #2</p>
          <span>Minimalist</span>
          <p>Minimalist House explores modern architecture that inspires us with clever details.</p>
          <div className="btn_avatars">
            <button className="card_buttons">VIEW PROJECT</button>
            <div className="avatars_collection">
              <img src="./1.jpg" className="avatar_image" />
              <img src="./2.jpg" className="avatar1_image" />
              <img src="./3.jpg" className="avatar2_image" />
              <img src="./4.jpg" className="avatar3_image" />
              <img src="./1.jpg" className="avatar4_image" />
            </div>
          </div>
        </div>

        {/* 3rd CARD */}
        <div className="card_contents">
          <img src="./home3.jpg" className="card_image" />
          <p>Project #3</p>
          <span>Gothic</span>
          <p>
            Gothic House is a Gothic-style building in the centre of Brighton, city of Brighton and
            Hove.
          </p>
          <div className="btn_avatars">
            <button className="card_buttons">VIEW PROJECT</button>
            <div className="avatars_collection">
              <img src="./1.jpg" className="avatar_image" />
              <img src="./2.jpg" className="avatar1_image" />
              <img src="./3.jpg" className="avatar2_image" />
              <img src="./4.jpg" className="avatar3_image" />
              <img src="./1.jpg" className="avatar4_image" />
            </div>
          </div>
        </div>

        {/* 4th CARD */}
        <div className="card_contents">
          <img src="./home4.jpg" className="card_image" />
          <p>Project #4</p>
          <span>Aesthetic</span>
          <p>
            An aesthetic house is all about creating a wonderful space that reflects your
            personality.
          </p>

          <div className="btn_avatars">
            <button className="card_buttons">VIEW PROJECT</button>
            <div className="avatars_collection">
              <img src="./1.jpg" className="avatar_image" />
              <img src="./2.jpg" className="avatar1_image" />
              <img src="./3.jpg" className="avatar2_image" />
              <img src="./4.jpg" className="avatar3_image" />
              <img src="./1.jpg" className="avatar4_image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
