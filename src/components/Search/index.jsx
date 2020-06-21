import React, { useState, Fragment } from "react";
import "./styles.css";
import search from "../../assets/SVG/search.svg";
import { Link } from "react-router-dom";

export default function Search() {

  const [title, setTitle] = useState("");

  const handleClick = (title)=>{
    localStorage.setItem("bookTitle", title)
  }

  return (
    <Fragment>
    <section className="home__section">
      <form className="home__form">
        <input
          placeholder="Leave me empty for random books"
          className="home__search__input"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="home__vline"></div>
        <Link to="/searchpage">
          <button className="home__search__btn"
          onClick={()=>handleClick(title)}
          >
            <img
              className="home__search__img"
              src={search}
              alt="search button"
            />
          </button>
        </Link>
      </form>
    </section>
    </Fragment>
  );
}
