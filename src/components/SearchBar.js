import React from "react";

function SearchBar({searchTerm, onChange}) {

  function handleChange(event) {
    onChange(event.target.value);
  }
  return (
    <div className="search">
      <input type="text" className="searchTerm" onChange = {handleChange} value = {searchTerm}/>
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
