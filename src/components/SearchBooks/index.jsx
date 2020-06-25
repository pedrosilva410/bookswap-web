import React, { Fragment, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import GetAllBooksApi from "../../js/get-all-books-api";

export default function SearchBooks() {
  const [bookInfo, setBookInfo] = useState([]);
  const bookInfoReq = GetAllBooksApi.getBooks(localStorage.getItem("bookTitle"));
  bookInfoReq.then((res) => setBookInfo(res));

  const handleBookClick = (id) => localStorage.setItem("bookId", id)

  return (
    <Fragment>
      <ul className="searchBooks">
        {bookInfo.map(({ id, title, description, image }) => (
          <Link to="/bookdetails">
          <li onClick={()=>{handleBookClick(id)}} className="searchBooks__book" key={id}>
            <img src={image} className="searchBooks__image" alt="book_image" />
            <div>
              <p className="searchBooks__title">{title}</p>
              <p className="searchBooks__description">{description}</p>
            </div>
          </li>
          </Link>
        ))}
      </ul>
    </Fragment>
  );
}
