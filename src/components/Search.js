import React, { useState } from "react";
import "../styles/Search.css";

const Search = () => {

  const [searchInput, setSearchInput] = useState("")

  return (
    <div className="search-box">
      <label>Search Top Stories:</label>
      <input type="text" placeholder="Search..." value={searchInput} onChange={e => setSearchInput(e.target.value)} />
    </div>
  )
}

export default Search;