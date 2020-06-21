import React from "react";
import "./styles.css";
import Search from "../../components/Search";
import SearchBooks from "../../components/SearchBooks";

export default function SearchPage() {
  return (
    <main className="searchpage">
      <Search />
      <SearchBooks/>
    </main>
  );
}
