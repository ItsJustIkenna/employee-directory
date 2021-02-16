import React from "react";

const SearchBox = ({ handleSearch }) => {
  return (
    <div>
      <form>
        <input onChange={(e) => handleSearch(e)} />
      </form>
    </div>
  );
};

export default SearchBox;
