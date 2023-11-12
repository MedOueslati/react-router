// Importing necessary dependencies and components from React and react-bootstrap
import React from "react";
import MovieCard from "./MovieCard";
import { Row, Container } from "react-bootstrap";

// Functional component MovieList that takes a 'movies' prop
const MovieList = ({ movies }) => {
  return (
    <div>
      {/* Container to hold the movie list */}
      <Container>
        {/* Row to display movies in a horizontal layout */}
        <Row>
          {/* Mapping through the 'movies' array and rendering a MovieCard component for each movie */}
          {movies.map((movie) => (
          <MovieCard movie={movie} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

// Export the MovieList component as the default export
export default MovieList;
