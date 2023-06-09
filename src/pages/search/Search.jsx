import React from "react";
import SearchForm from "../../component/search/Form";
import SearchResult from "../../component/search/SearchResult";

const Search = () => {
  return (
    <div className="app">
      <SearchForm />
      <SearchResult />
    </div>
  );
};

export default Search;
