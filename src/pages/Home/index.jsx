import React from "react";
import "./styles.css";
import search from "../../assets/SVG/search.svg";
import userImg from '../../assets/SVG/account.svg'

export default function Home() {

  if (localStorage.length > 1) {
    return (
      <main>
          <div className='userInfo'>
              <button className='trade__button'>Trade Book</button>
              <p className='userName'>{localStorage.getItem('email')}</p>
              <img className='userImgHome' alt='user' src={userImg}/>
          </div>

        <section className="section1">
          <form className="home__form">
            <input
              placeholder="Seach Book"
              className="search__input"
              type="text"
            />
            <input
              placeholder="Location"
              className="location__input"
              type="select"
            />
            <div className="vline"></div>
            <button className="search__btn">
              <img className="search__img" src={search} alt="search button" />
            </button>
          </form>
          <p className="p__cat">categories</p>
        </section>
      </main>
    );
  } else {
    return (
      <main>
        <section className="section1">
          <form className="home__form">
            <input
              placeholder="Seach Book"
              className="search__input"
              type="text"
            />
            <input
              placeholder="Location"
              className="location__input"
              type="select"
            />
            <div className="vline"></div>
            <button className="search__btn">
              <img className="search__img" src={search} alt="search button" />
            </button>
          </form>
          <p className="p__cat">categories</p>
        </section>
      </main>
    );
  }
}
