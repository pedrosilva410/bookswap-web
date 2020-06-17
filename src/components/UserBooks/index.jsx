import React, { Fragment, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import GetUserBooksApi from "../../js/get-user-books-api";

export default function UserBooks() {
  const [bookInfo, setBookInfo] = useState([]);

  const bookInfoReq = GetUserBooksApi.getUserBooks(
    localStorage.getItem("userId")
  );
  bookInfoReq.then((res) => setBookInfo(res));

  const handleBookClick = (id) => {
    localStorage.setItem("bookId", id);
  }


  return (
    <Fragment>
      <h3 className="userBooks__Title">Books</h3>
      <ul className="userBooks">
        {bookInfo.map(({ id, title, description, image }) => (
          <Link to="/bookdetails">
          <li onClick={()=>{handleBookClick(id)}} className="userBooks__book" key={id}>
            <img src={image} className="userBooks__image" />
            <div className="userBooks__details">
              <p className="userBooks__title">{title}</p>
              <p className="userBooks__description">{description}</p>
            </div>
          </li>
          </Link>
        ))}
      </ul>
    </Fragment>
  );
}
