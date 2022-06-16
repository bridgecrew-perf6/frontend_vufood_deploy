import React from "react";
import images from "../../../constants/images";
import { AiFillPlayCircle } from "react-icons/ai";
import "./Quote.css";

const Quote = () => {
  return (
    <div className="app__quote section__padding">
      <div className="app__quote-info">
        <div className="quote__info-desc">
          <span>"</span>
          <h3>
            You can't go wrong with Chicken Mandi, I had it twice. The chicken
            was cooked perfectly, juicy & soft (usually mandi chicken is a bit
            dry). I would defiantly recommend it.
          </h3>
        </div>
        <div className="quote__info-author">
          <div className="info__author-name">
            <h2>Vu Ngu</h2>
            <h4>Vietnam, 25/05/2022</h4>
          </div>
          <div className="info__author-image">
            <img src={images.harry} alt="" />
          </div>
        </div>
      </div>
      <div className="app__quote-video">
        <AiFillPlayCircle />
        <img src={images.video} alt="" />
      </div>
    </div>
  );
};

export default Quote;
