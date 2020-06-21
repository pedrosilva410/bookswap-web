import React from "react";
import "./styles.css";
import Search from "../../components/Search";

export default function Home() {
  return (
    <main className="home__main">
      <Search/>
      <h1 className="home__title">Trade your books for free!</h1>
    </main>
  );
}
