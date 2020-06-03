import React, { Fragment, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import GetAllBooksApi from "../../js/get-all-books-api";

export default function UserBooks() {
  const [bookInfo, setBookInfo] = useState([]);

  const bookInfoReq = GetAllBooksApi.getBooks(localStorage.getItem("userId"));
  bookInfoReq.then((res) => setBookInfo(res));

  return (
    <Fragment>
      <h3 className="booksTitle">Books</h3>
      <ul className="userBooks">
        {bookInfo.map(({ id, title, description, image }) => (
          <li key={id}>
            <img src={image} className="userbooks__image"/>
            <p className="userbooks__title">{title}</p>
            <p className="userbooks__description">{description}</p>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
