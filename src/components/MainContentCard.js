import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";

const MainContentCard = ({ name, total, message, route }) => {
  const navigate = useNavigate();
  return (
    <div
      className="main-content-card me-3 mb-3"
      onClick={() => navigate(route)}
    >
      <div className="main-content-txt">
        {name} <BsFillInfoCircleFill className="ms-2" color="#6c727c" />
      </div>
      <div className="main-content-total mt-2">{total}</div>
    </div>
  );
};

export default MainContentCard;
