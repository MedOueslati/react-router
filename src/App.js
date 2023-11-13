// Importing necessary dependencies

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MoviesList from "./components/MoviesList";
import Search from "./components/Search";
import AddMovie from "./components/AddMovie";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

// State hooks for search input, rating filter, and movie list
const App = () => {
  const [keysearch, setKeysearch] = useState("");
  const [rating, setRating] = useState(1);
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Shanty Town",
      year: "2023",
      type: "Series",
      description: "A description of Shanty Town...",
      trailer: "https://www.youtube.com/embed/your-trailer-id",
      rate: "2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjEyNjVkMmEtZWFmYy00MDE5LThmZTUtYmE4N2Q5MDRkMmE4XkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_SX300.jpg",
    },
    {
      id: 2,
      title: "John Wick: Chapter 4",
      year: "2023",
      type: "Movie",
      description: "A description of Jhon wick...",
      trailer: "https://www.youtube.com/embed/your-trailer-id",
      rate: "3",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    },
    {
      id: 3,
      title: "Prison Break",
      year: "2005 2017",
      type: "series",
      description: "A description of Prison Break...",
      trailer: "https://www.youtube.com/embed/your-trailer-id",
      rate: "5",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_SX300.jpg",
    },
    {
      id: 4,
      title: "Day of the Dead: Bloodline",
      year: "2017",
      type: "movie",
      description: "A description of Day of the Dead: Bloodline...",
      trailer: "https://www.youtube.com/embed/your-trailer-id",
      rate: "1",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjE2MTg1NDQ2MF5BMl5BanBnXkFtZTgwMDkxMzMzNDM@._V1_SX300.jpg",
    },
  ]);
  // Handler function to update the search input text

  const search = (text) => {
    setKeysearch(text);
  };
  // Handler function to update the rating filter

  const setRate = (rate) => {
    setRating(rate);
  };
  // Handler function to add a new movie to the list

  const addMovie = (newMovie) => {
    setMovies((Movies) => [...Movies, newMovie]);
  };
  // JSX for the App component
  return (
    <>
      <div className="input-search">
        <AddMovie addMovie={addMovie} />
        <Search search={search} setRate={setRate} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <MoviesList
              movies={movies.filter(
                (el) =>
                  el.rate >= rating &&
                  el.title.toLowerCase().includes(keysearch.toLowerCase())
              )}
            />
          }
        />
        <Route path="/trailer/:id" element={<MovieDetail list={movies} />} />
      </Routes>
    </>
  );
};
// Exporting the App component
export default App;
