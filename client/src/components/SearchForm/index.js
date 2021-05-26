import React from "react";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search For a movie or tv show:</label>
        <input
          value={props.title}
          onClick={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="term"
        />
        <button className="button">Submit</button>
      </div>
    </form>
  );
}

export default SearchForm;
