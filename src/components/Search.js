// Importing necessary dependencies and components from React
import React from "react";
import StarRatingComponent from "react-star-rating-component";

// Functional component Search that takes 'search', 'setRate', and 'rating' as props
const Search = ({ search, setRate, rating }) => {
  // Function to handle star rating click events
  const onStarClick = (nextValue) => {
    setRate(nextValue);
  };

  // Render the component
  return (
    <div className="search-box">
      {/* Input for searching a movie with an onChange event to update search text */}
      <input
        type="text"
        placeholder="Search any movie.."
        onChange={(e) => search(e.target.value)}
      />
      {/* Star rating component with the ability to set the rating on click */}
      <div> 
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
      </div>
      {/* Additional div (you may want to update this section based on your needs) */}
      <div></div>
    </div>
  );
};

// Export the Search component as the default export
export default Search;
