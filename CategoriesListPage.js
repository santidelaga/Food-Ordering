import React from "react";
import { Table, Container, Button, Col, Image } from "react-bootstrap";
// import { useHistory } from 'react-router-dom';

import AlertMessage from "../../components/AlertMessage";
import AddCategoryPage from './AddCategoryPage';

const CategoriesListPage = () => {
  const [categories, setCategories] = React.useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );
  const deleteHandler = (id) => {
    const categoriesListUpdated = categories.filter(
      (category) => category.id != id
    );
    setCategories(categoriesListUpdated);
  };
  const [showCategory, setShowCategory] = React.useState(true)
  // const history = useHistory();


  const handleAddCategory = (e) => {
    e.preventDefault();
     // history.push('/AddCategoryPage')
    setShowCategory(false) // this line indicates that the AddCategoryPage will be shown when the button is clicked
  }
  
  return (
    <>
      {/* Implement Task 2.b - Displaying all categories records in a tabular structure */}
      {showCategory ? (
        <>
        <Button variant="primary" onClick={handleAddCategory} style={{marginBottom: "4px"}}>
          Add Category +
        </Button>
        <Container>
          <h2>List of Categories</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>
                    <Image src={category.image} width={100} height={100} rounded />
                  </td>
                  <td>
                    <Button variant="secondary" style = {{ marginBottom: "8px"}}>
                        Edit
                      </Button>
                      <Button variant="danger" onClick={() => deleteHandler(category.id)} >
                        Delete
                      </Button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
      ) : (
        <AddCategoryPage />
      )}
    </>
  );
};

export default CategoriesListPage;
