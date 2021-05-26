import React, { useState } from "react";
import MovieCard from "../components/Cards";
import API from "../utils/API";
import { Button } from 'react-bulma-components';

function SearchPage() {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.getMovie(title).then((res) => {
      const movieSearch = res.data.results.map((info) => ({
        title: info.title,
        id: info.id,
        release: info.release_date,
        image: `https://image.tmdb.org/t/p/w500/${info.poster_path}`,
      }));
      setResults(movieSearch);
    });
    console.log(results);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          className="searchBar"
          value={title}
          type="text"
          name="search"
          placeholder="Search for Movies"
          onChange={(e) => setTitle(e.target.value)}
        />

        <Button 
          color="link"
          type="submit"
          value="Submit" > Search </Button>
      </form>
        <div className="spacer"></div>
      <div className="cardContainer">
        {results.length === 0 ? (
          <h2 className="noResult"> No Results</h2>
        ) : (
          results.map((card) => (
            <MovieCard
              key={card.id}
              image={card.image}
              title={card.title}
              id={card.id}
            />
          ))
        )}
      </div>
      <div className="spacer">
      </div>
    </>
  );
}

export default SearchPage;
