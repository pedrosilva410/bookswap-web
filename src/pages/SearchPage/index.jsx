import React from "react";
import "./styles.css";
import search from "../../assets/SVG/search.svg";
export default function SearchPage() {
  return (
    <main className="main__search">
      <div className="div__search">
        <input placeholder="Seach Book" className="search__input" type="text" />
        <input
          placeholder="Location"
          className="location__input"
          type="select"
        />
        <div className="vline"></div>
        <button className="search__btn">
          <img className="search__img" src={search} alt="search button" />
        </button>
      </div>
      <div className="div__books"></div>
    </main>
  );
}
