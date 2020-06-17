import React from "react";
import "./styles.css";
import SearchBooks from "../../components/SearchBooks";
import Search from "../../components/Search";

export default function SearchPage() {
  return (
    <main className="searchpage">
      <Search />
      <SearchBooks />
    </main>
  );
}
