import React from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
import AlertMessage from "../../components/AlertMessage";
import CuisinesListPage from "./CuisinesListPage";

const AddCuisinePage = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageData, setImageData] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState("");

  const handleNameChange = (e) => {
    setError("");
    setSuccess("");
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setError("");
    setSuccess("");
    setDescription(e.target.value);
  };
  const handleImageDataChange = (e) => {
    setError("");
    setSuccess("");
    setImageData(e.target.value);
  };

  const addCuisineHandler = (e) => {
    e.preventDefault();
    const cuisines = JSON.parse(localStorage.getItem("cuisines")) || [];

    const cuisine = {
      id: cuisines.length + 1,
      name: name,
      description: description,
      image: imageData
    };

    cuisines.push(cuisine);
    localStorage.setItem("cuisines", JSON.stringify(cuisines));

    setSuccess("cuisine is added successfully");

  };

  const [addCuisine, setAddCuisine] = React.useState(true);

  const handleCuisineList = (e) => {
    e.preventDefault();
    setAddCuisine(false);
  }; 

  return (
    <>
      {addCuisine ? (
        <>
          <Button variant="secondary" onClick={handleCuisineList} style={{ marginTop: "10px", marginBottom: "20px" }}>
            View Cuisines
          </Button>

          <Container>
          <div style={{ background: "#DFE0E1", padding: "20px", borderRadius: "10px" }}>
            <Form onSubmit={addCuisineHandler} style={{ marginTop: "10px" }}>
              <Form.Group controlId="formCuisineName">
                <Form.Label>Cuisine Name</Form.Label>
                <Form.Control type="text" placeholder="Enter cuisine name" onChange={handleNameChange} />
              </Form.Group>

              <Form.Group controlId="formCuisineDescription" style={{ marginTop: "10px" }}>
                <Form.Label>Cuisine Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter cuisine description" onChange={handleDescriptionChange} />
              </Form.Group>

              <Form.Group controlId="formCuisineImage" style={{ marginTop: "10px" }}>
                <Form.Label>Cuisine Image URL</Form.Label>
                <Form.Control type="text" placeholder="Enter cuisine image URL" onChange={handleImageDataChange} />
              </Form.Group>

              <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
                Add Cuisine
              </Button>
            </Form>
          </div>
        </Container>
        </>
      ) : (
        <CuisinesListPage />
      )}
    </>
  );
};

export default AddCuisinePage;
