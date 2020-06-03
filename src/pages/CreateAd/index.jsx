import React from "react";
import "./styles.css";
import { useState } from "react";
import BookApi from "../../js/book-api";
import { useHistory } from "react-router-dom";

export default function CreateAd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [genres, setGenres] = useState(["romance", "comedia"]);
  const [image, setImage] = useState(
    "https://www.bauducco.com.br/wp-content/uploads/2017/09/default-placeholder-1-2.png"
  );
  const history = useHistory();

  function handleCreateBook() {
    BookApi.createBook(
      title,
      description,
      location,
      genres,
      image,
      localStorage.getItem("userId")
    );
    history.push("/");
    window.location.reload();
  }

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

        <div className="createAd_genres">genres</div>

        <button onClick={() => handleCreateBook()} className="createAd_button">
          Post
        </button>
      </form>
    </main>
  );
}
