import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const DefaultInputPassword = () => {
  const [type, setType] = useState("password");
  return (
    <div className="position-relative">
      {type === "password" ? (
        <IoEyeOff
          className="password-icon"
          size={20}
          onClick={() => setType("text")}
        />
      ) : (
        <IoEye
          className="password-icon"
          size={20}
          onClick={() => setType("password")}
        />
      )}

      <input type={type} className="default-input" />
    </div>
  );
};

export default DefaultInputPassword;
