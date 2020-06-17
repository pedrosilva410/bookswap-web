import React from "react";
import "./styles.css";
import { useState } from "react";
import BookApi from "../../js/book-api";
import { useHistory } from "react-router-dom";

export default function CreateAd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [categories, setCategories] = useState([]);
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

  const handleCategories = (newCategory) => {setCategories(categories => [...categories, newCategory])};
  

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

        <div className="createAd_genres">
            <div className="radio">
              <label>
                <input type="radio" value="Romance" onClick={e => {handleCategories(e.target.value)}}/>
                Romance
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="Comedy" onClick={e => {handleCategories(e.target.value)}}/>
                Comedy
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="Action" onClick={e => {handleCategories(e.target.value)}}/>
                Action
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="Sci-fi" onClick={e => {handleCategories(e.target.value)}}/>
                Sci-Fi
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="Drama" onClick={e => {handleCategories(e.target.value)}}/>
                Drama
              </label>
            </div>
        </div>

        <button onClick={() => handleCreateBook()} className="createAd_button">
          Post
        </button>
      </form>
    </main>
  );
}
