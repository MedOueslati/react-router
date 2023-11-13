// Importing necessary dependencies and components from React and react-bootstrap
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

// Functional component AddMovie that takes an 'addMovie' prop
const AddMovie = ({ addMovie }) => {
  // State variables to manage modal visibility and new movie data
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    year: "",
    type: "",
    rate: 1,
    poster: "",
  });

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Updating the newMovie state based on the input changes
    setNewMovie((Movie) => ({
      ...Movie,
      [name]: value,
    }));
  };

  // Function to close the modal
  const handleClose = () => {
    setShow(false);
  };

  // Function to show the modal
  const handleShow = () => {
    setShow(true);
  };

  // Function to handle adding a new movie
  const handleAddMovie = () => {
    // Validating the movie title
    if (newMovie.title.trim() === "") {
      alert("Please enter a valid movie title.");
      return;
    }

    // Calling the addMovie function with the newMovie data
    addMovie(newMovie);

    // Resetting the newMovie state and closing the modal
    setNewMovie({
      title: "",
      year: "",
      type: "",
      rate: 1,
      poster: "",
    });
    handleClose();
  };

  // Render the component
  return (
    <>
    <div className="search-box">
      {/* Button to trigger the modal */}
      <button type="button" className="button-85" onClick={handleShow}>
        + Add a new movie
      </button>
      </div>

      {/* Modal component */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form for adding a new movie */}
          <Form>
            <Form.Group>
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newMovie.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Year:</Form.Label>
              <Form.Control
                type="text"
                name="year"
                value={newMovie.year}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Type:</Form.Label>
              <Form.Control
                type="text"
                name="type"
                value={newMovie.type}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating:</Form.Label>
              <Form.Control
                type="number"
                name="rate"
                value={newMovie.rate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Poster URL:</Form.Label>
              <Form.Control
                type="text"
                name="poster"
                value={newMovie.poster}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Button to close the modal */}
          <Button variant="btn btn-light" onClick={handleClose}>
            Close
          </Button>
          {/* Button to add the new movie */}
          <Button variant="btn btn-light" onClick={handleAddMovie}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Export the AddMovie component as the default export
export default AddMovie;
