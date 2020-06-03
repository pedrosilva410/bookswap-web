import React from "react";
import UserPhoto from "../../assets/SVG/account.svg";
import "./styles.css";
import GetAccountApi from "../../js/get-account-api";
import { useState } from "react";
import UserBooks from "../../components/UserBooks";

export default function Profile() {
  const [accountInfo, setAccountInfo] = useState({});

  const accountInfoReq = GetAccountApi.getAccount(
    localStorage.getItem("userId")
  );
  accountInfoReq.then((res) => setAccountInfo(res));

  return (
    <main>
      <div className="profile__userInfo">
        <img className="profile__userImg" alt="userPhoto1" src={UserPhoto} />
        <div className="profile__userBox">
          <div className="profile__userText">
            <h3 className="profile__userName">{accountInfo.userName}</h3>
            <p className="profile__userBio">{accountInfo.bio}</p>
          </div>
          <div className="profile__userContact">
            <p className="profile__contactText">Email: {accountInfo.email}</p>
            <p className="profile__contactText">Phone: {accountInfo.contact}</p>
          </div>
        </div>
      </div>

      <UserBooks />
    </main>
  );
}
