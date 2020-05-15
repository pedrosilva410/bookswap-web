import React from "react";
import "./styles.css";

export default function BookDetails() {
  return (
    <main>
      <div className="bookDetails__bookInfo">
        <div className="bookDetails__images">
          <div className="bookDetails__bookImage">
            <p className="textii">Book Image</p>
          </div>
          <div className="bookDetails__bookImage">
            <p className="textii">Book Image</p>
          </div>
          <div className="bookDetails__bookImage">
            <p className="textii">Book Image</p>
          </div>
        </div>
        <div className="bookDetails__text">
          <h3 className="bookDetails__bookTitle">Book Title</h3>
          <p className="bookDetails__description">Book Description</p>
        </div>
      </div>
      <button className="bookDetails__contact">Contact</button>
    </main>
  );
}
