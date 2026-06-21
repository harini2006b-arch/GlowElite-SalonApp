import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchBar.css";
function SearchBar({
  searchTerm,
  setSearchTerm
}) {
  return (

    <div className="search-wrapper">

      <FaSearch className="search-icon" />

      <input
        type="text"
        className="search-bar"
        placeholder="Search salons, locations..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

    </div>

  );
}

export default SearchBar;