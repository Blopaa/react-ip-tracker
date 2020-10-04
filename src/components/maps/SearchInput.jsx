import React from "react";

const SearchInput = ({ipS, handleInputChange}) => {
  console.log(ipS);
  return (
    <div>
      <form>
        <input
          type="text"
          name="ipS"
          value={ipS}
          onChange={handleInputChange}
          autoComplete="none"
        />
      </form>
    </div>
  );
};

export default SearchInput;
