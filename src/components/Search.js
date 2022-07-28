import React, { useState } from "react";
import "../styles/Search.css";

const Search = ({ getInput }) => {

  const [searchInput, setSearchInput] = useState("")

  const handleChange = (e) => {
    setSearchInput(e.target.value)
    getInput(e.target.value)
  }

  return (
    <div className="search-box">
      <label>Search Top Stories:</label>
      <input type="text" placeholder="Search..." value={searchInput} onChange={e => handleChange(e)} />
    </div>
  )
}

export default Search;