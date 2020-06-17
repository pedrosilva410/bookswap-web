import React from "react";
import "./styles.css";
import search from "../../assets/SVG/search.svg";
import { Link } from "react-router-dom";

export default function Search() {
    return (
        <section className="home__section">
          <form className="home__form">
            <input
              placeholder="Seach Book"
              className="home__search__input"
              type="text"
            />
            {/* <input
              placeholder="Location"
              className="home__location__input"
              type="select"
            /> */}
            <div className="home__vline"></div>
            <Link to="/searchpage">
              <button className="home__search__btn">
                <img
                  className="home__search__img"
                  src={search}
                  alt="search button"
                />
              </button>
            </Link>
          </form>
          <p className="home__categories">categories</p>
        </section>
    );
  }