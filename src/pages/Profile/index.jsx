import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import "./styles.css";
import UserPhoto from "../../assets/SVG/account.svg";

import UserBooks from "../../components/UserBooks";
import GetAccountApi from "../../js/get-account-api";
import EditProfileApi from "../../js/edit-profile-api";

export default function Profile() {
  const [accountInfo, setAccountInfo] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accountInfoReq = GetAccountApi.getAccount(
    localStorage.getItem("userId")
  );
  accountInfoReq.then((res) => setAccountInfo(res));

  const [userName, setUserName]= useState(accountInfo.userName)
  const [bio, setBio]= useState(accountInfo.bio)
  const [email, setEmail]= useState(accountInfo.email)
  const [contact, setContact]= useState(accountInfo.contact)
  const [password, setPassword]= useState(accountInfo.password)
  const [confirmPassword, setConfirmPassword]= useState(accountInfo.password)

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
            <button
              className="profile__editProfile"
              onClick={() => setIsModalOpen(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <UserBooks />

      <Modal className="profile__editProfile__modal" isOpen={isModalOpen}>
      <button
          className="profile__close__modal"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>

        <h2>Edit Profile</h2>

        <div className="profile__camps__modal">
          <p className="profile__camps__label">Edit name</p>
          <input onChange={e=>setUserName(e.target.value)} type="text" className="profile__input__modal" placeholder={accountInfo.userName}/>
        </div>

        <div className="profile__camps__modal">
        <p className="profile__camps__label">Edit bio</p>
        <textarea onChange={e=>setBio(e.target.value)} className="profile__inputBio__modal" placeholder={accountInfo.bio}/>
        </div>

        <div className="profile__camps__modal">
        <p className="profile__camps__label">Edit email</p>
        <input onChange={e=>setEmail(e.target.value)} type="text" className="profile__input__modal" placeholder={accountInfo.email}/>
        </div>

        <div className="profile__camps__modal">      
        <p className="profile__camps__label">Edit phone number</p>
        <input onChange={e=>setContact(e.target.value)} type="text" className="profile__input__modal" placeholder={accountInfo.contact}/>
        </div>

        <div className="profile__camps__modal">      
        <p className="profile__camps__label">Edit password</p>
        <input onChange={e=>setPassword(e.target.value)} type="password" className="profile__input__modal" placeholder="New password"/>
        <input onChange={e=>setConfirmPassword(e.target.value)} type="password" className="profile__inputpass__modal" placeholder="Confirm new passoword"/>
        </div>

        <button
        className="profile__editProfile"
        onClick={()=>{
          if(password!==confirmPassword){
            alert("passwords don't match")
          } else {
            EditProfileApi.editAccount(userName, email, password, bio, contact, localStorage.getItem("userId"));
            setIsModalOpen(false);
          }
        }}
        >
          Save Changes
        </button>
      </Modal>
    </main>
  );
}
