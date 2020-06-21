import React, { Fragment, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import GetUserBooksApi from "../../js/get-user-books-api";
import Modal from "react-modal";

export default function UserBooks() {
  const [bookInfo, setBookInfo] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState("");

  const bookInfoReq = GetUserBooksApi.getUserBooks(
    localStorage.getItem("userId")
  );
  bookInfoReq.then((res) => setBookInfo(res));

  const handleBookClick = (id) => {
    localStorage.setItem("bookId", id);
  };

  const handleCategories = (newCategory) => {
    setCategories(newCategory);
  };

  return (
    <Fragment>
      <h3 className="userBooks__Title">Books</h3>
      <ul className="userBooks">
        {bookInfo.map(({ id, title, description, image }) => (
          <li
            onClick={() => {
              handleBookClick(id);
            }}
            className="userBooks__book"
            key={id}
          >
            <Link className="userBooks__details__link" to="/bookdetails">
              <img src={image} className="userBooks__image" />
              <div className="userBooks__details">
                <p className="userBooks__title">{title}</p>
                <p className="userBooks__description">{description}</p>
              </div>
            </Link>
            <div className="userBooks__bookOptions">
              <button
                className="userBooks__button"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                edit book
              </button>
              <button className="userBooks__button">delete book</button>
            </div>
          </li>
        ))}
      </ul>

      <Modal className="userBooks__editProfile__modal" isOpen={isModalOpen}>
        <button
          className="userBooks__close__modal"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>

        <h2>Edit Book</h2>

        <div className="userBooks__camps__modal">
          <p className="userBooks__camps__label">Edit title</p>
          <input type="text" className="userBooks__input__modal" />
        </div>

        <div className="userBooks__camps__modal">
          <p className="userBooks__camps__label">Edit description</p>
          <textarea className="userBooks__inputBio__modal" />
        </div>

        <form className="UserBooks_genres">
          <p className="createAd_genreTitle" >Select the genre of your book</p>
          <input
            type="radio"
            name="genres"
            id="romance"
            value="romance"
            className="createAd_genreOption"
            onClick={(e) => {
              handleCategories(e.target.value);
            }}
          />
          <label for="romance">Romance</label>

          <input
            type="radio"
            name="genres"
            id="comedy"
            value="comedy"
            className="createAd_genreOption"
            onClick={(e) => {
              handleCategories(e.target.value);
            }}
          />
          <label for="comedy">Comedy</label>

          <input
            type="radio"
            name="genres"
            id="action"
            value="action"
            className="createAd_genreOption"
            onClick={(e) => {
              handleCategories(e.target.value);
            }}
          />
          <label for="action">Action</label>

          <input
            type="radio"
            name="genres"
            id="sci-fi"
            value="sci-fi"
            className="createAd_genreOption"
            onClick={(e) => {
              handleCategories(e.target.value);
            }}
          />
          <label for="sci-fi">Sci-Fi</label>

          <input
            type="radio"
            name="genres"
            id="drama"
            value="drama"
            className="createAd_genreOption"
            onClick={(e) => {
              handleCategories(e.target.value);
            }}
          />
          <label for="drama">Drama</label>

          <input
            type="radio"
            name="genres"
            id="other"
            value="other"
            className="createAd_genreOption"
            onClick={(e) => {
              handleCategories(e.target.value);
            }}
          />
          <label for="other">Other</label>
        </form>
      </Modal>
    </Fragment>
  );
}
