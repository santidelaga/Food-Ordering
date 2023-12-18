import React from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
import AlertMessage from "../../components/AlertMessage";
import CategoriesListPage from "./CategoriesListPage";

const AddCategoryPage = () => {
  const [addCategory, setAddCategory] = React.useState(true);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageData, setImageData] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState("");

  const handleCategoryList = (e) => {
    e.preventDefault();
    setAddCategory(false);
  };

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

  const addCategoryHandler = (e) => {
    e.preventDefault();
    const categories = JSON.parse(localStorage.getItem("categories")) || [];

    const category = {
      id: categories.length + 1,
      name: name,
      description: description,
      image: imageData
    };

    categories.push(category);
    localStorage.setItem("categories", JSON.stringify(categories));

    setSuccess("category is added successfully");
  };

  return (
    <>
    {addCategory ? (
        <>
          <Button variant="secondary" onClick={handleCategoryList} style={{ marginTop: "10px", marginBottom: "20px" }} >
            View Categories
          </Button>

          <Container>
          <div style={{ background: "#DFE0E1", padding: "20px", borderRadius: "10px" }}>
            <Form onSubmit={addCategoryHandler} style={{ marginTop: "10px" }}>
              <Form.Group controlId="formCategoryName">
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" placeholder="Enter category name" onChange={handleNameChange} />
              </Form.Group>

              <Form.Group controlId="formCategoryDescription" style={{ marginTop: "10px" }}>
                <Form.Label>Category Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter category description" onChange={handleDescriptionChange} />
              </Form.Group>

              <Form.Group controlId="formCategoryImage" style={{ marginTop: "10px" }}>
                <Form.Label>Category Image URL</Form.Label>
                <Form.Control type="text" placeholder="Enter category image URL" onChange={handleImageDataChange} />
              </Form.Group>

              <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
                Add Category
              </Button>
            </Form>
          </div>
        </Container>
        </>
      ) : (
        <CategoriesListPage />
      )}
    </>
  );
};
 
export default AddCategoryPage;