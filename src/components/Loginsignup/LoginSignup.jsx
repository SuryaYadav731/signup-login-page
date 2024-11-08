import React, { useState } from "react";
import "./LoginSignup.css";
import { IoPerson } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function LoginSignup() {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <IoPerson />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src="" alt="" />
          <MdOutlineEmail />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src="" alt="" />
          <RiLockPasswordLine />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up"?<div></div>:<div className="forget-password">
        Lost Password ? <span>Click Here </span>
      </div>}

      

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray " : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
