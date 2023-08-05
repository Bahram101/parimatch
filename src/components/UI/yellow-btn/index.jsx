import React from "react";
import "./yellow-btn.scss";

const YellowBtn = ({ setModalActive, block }) => {
  return (
    <div
      className="buttonBlock"
      onClick={() => setModalActive(true)}
      style={{margin: block == 'boxes' ? '0 auto' : '0 343px'}} 
    >
      <span className="textPart">Участвовать</span>
    </div>
  );
};

export default YellowBtn;
