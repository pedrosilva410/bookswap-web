import React from "react";
import "./styles.css";
import { useState } from "react";
import BookApi from "../../js/book-api";
import { useHistory } from "react-router-dom";

export default function CreateAd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [categories, setCategories] = useState("");
  const [image, setImage] = useState(
    "https://www.bauducco.com.br/wp-content/uploads/2017/09/default-placeholder-1-2.png"
  );
  const history = useHistory();

  function handleCreateBook() {
    BookApi.createBook(
      title,
      description,
      location,
      categories,
      image,
      localStorage.getItem("userId")
    );
    history.push("/");
    window.location.reload();
  }

  const handleCategories = (newCategory) => {
    setCategories(newCategory);
  };

  return (
    <main>
      <form className="createAd_form">
        <div className="createAd_main">
          <div className="createAd_img"></div>

          <div className="createAd_main_text">
            <input
              onChange={(event) => setTitle(event.target.value)}
              className="createAd_title"
              placeholder="Insert book title"
              type="text"
            />
            <textarea
              onChange={(event) => setDescription(event.target.value)}
              className="createAd_description"
              placeholder="Insert book description"
              type="text"
            />
            <input
              onChange={(event) => setLocation(event.target.value)}
              className="createAd_location"
              placeholder="Insert location"
              type="text"
            />
          </div>
        </div>

        <form className="createAd_genres">
          <p className="createAd_genreTitle">Select the genre of your book</p>
          <input
            type="radio"
            name="genres"
            id="romance"
            value="romance"
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

        <button onClick={() => handleCreateBook()} className="createAd_button">
          Post
        </button>
      </form>
    </main>
  );
}
