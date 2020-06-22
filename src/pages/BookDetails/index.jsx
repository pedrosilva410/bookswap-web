import React, { useState } from "react";
import Modal from "react-modal";
import "./styles.css";
import GetBookApi from "../../js/get-book-api";
import GetAccountApi from "../../js/get-account-api";
import UserPhoto from "../../assets/SVG/account.svg";

Modal.setAppElement("#root");
export default function BookDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookInfo, setBookInfo] = useState({});
  const [accountInfo, setAccountInfo] = useState({});

  const bookInfoReq = GetBookApi.getBook(localStorage.getItem("bookId"));
  bookInfoReq.then((res) => setBookInfo(res));

  const accountInfoReq = GetAccountApi.getAccount(bookInfo.user);
  accountInfoReq.then((res) => setAccountInfo(res));

  let categories = [bookInfo.genres];
  console.log(isModalOpen);

  return (
    <main>
      <div className="bookDetails__bookInfo">
        <img
          className="bookDetails__bookImage"
          src={bookInfo.image}
          alt="Book image"
        />
        <div className="bookDetails__text">
          <h3 className="bookDetails__bookTitle">{bookInfo.title}</h3>
          <p className="bookDetails__description">{bookInfo.description}</p>
          <div className="bookDetails__catloc">
            <p className="bookDetails__categories">{bookInfo.genres}</p>
            <p className="bookDetails__categories">{bookInfo.location}</p>
          </div>
        </div>
      </div>
      <button
        className="bookDetails__contact"
        onClick={() => setIsModalOpen(true)}
      >
        Contact
      </button>

      <Modal className="bookDetails__contact__modal" isOpen={isModalOpen}>
        <img
          src={UserPhoto}
          alt="User Photo"
          className="bookDetails__contact__image__modal"
        />
        <div className="bookDetails__contact__div__modal">
          <h3 className="bookDetails__contact__userName__modal">
            {accountInfo.userName}
          </h3>
          <p className="bookDetails__contact__contactText__modal">
            Email: {accountInfo.email}
          </p>
          <p className="bookDetails__contact__contactText__modal">
            Phone: {accountInfo.contact}
          </p>
        </div>
        <button
          className="bookDetails__contact__button__modal"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>
      </Modal>
    </main>
  );
}
