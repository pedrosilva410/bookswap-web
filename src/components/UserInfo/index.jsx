import React from "react";
import "./styles.css";
import userImg from "../../assets/SVG/account.svg";
import { Link } from "react-router-dom";

export default function UserInfo() {
  return (
    <div className="userInfo">
      <button className="trade__button">Trade Book</button>
      <p className="userName">{localStorage.getItem("email")}</p>
      <Link to="/profile">
        <img className="userImgHome" alt="user" src={userImg} />
      </Link>
    </div>
  );
}