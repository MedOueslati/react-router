// Importing necessary dependencies and components from React and react-bootstrap
import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


// Functional component MovieCard that takes a 'movie' prop
const MovieCard = ({ movie }) => {
  return (
    <Col md={3} sm={6} xs={12} className="mb-4">
      {/* Movie card container with Bootstrap styling */}
      <Link to={`/moviedetail/${movie.id}`}>

      <div className="card h-100 ">
        {/* Movie poster image */}
        <img src={movie.poster} alt="movie" className="card-img-top" />
        {/* Movie details section */}
        <div className="card-body  ">
          {/* Movie title */}
          <h5 className="card-title">{movie.title}</h5>
          {/* Movie description */}
          <p>{movie.description}</p>
          {/* Star rating component */}
          <div class="overlay overlay_1">
            {/* Displaying star rating with react-star-rating-component */}
            <h6>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={movie.rate}
              />
            </h6>
          </div>
          {/* Additional information (you may want to update this section) */}
          <p className="card-text"></p>
        </div>
      </div>
      </Link>

    </Col>
  );
};

// Export the MovieCard component as the default export
export default MovieCard;
