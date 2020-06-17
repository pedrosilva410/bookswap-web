import React, { useState } from "react";
import "./styles.css";
import GetBookApi from "../../js/get-book-api";

export default function BookDetails() {
  const [bookInfo, setBookInfo] = useState({});

  const bookInfoReq = GetBookApi.getBook(localStorage.getItem("bookId"));
  bookInfoReq.then((res) => setBookInfo(res));

  return (
    <main>
      <div className="bookDetails__bookInfo">
        <div className="bookDetails__images">
          <img className="bookDetails__bookImage" src={bookInfo.image} />
          <img className="bookDetails__bookImage" src={bookInfo.image} />
          <img className="bookDetails__bookImage" src={bookInfo.image} />
        </div>
        <div className="bookDetails__text">
          <h3 className="bookDetails__bookTitle">{bookInfo.title}</h3>
          <p className="bookDetails__description">{bookInfo.description}</p>
        </div>
      </div>
      <button className="bookDetails__contact">Contact</button>
    </main>
  );
}
