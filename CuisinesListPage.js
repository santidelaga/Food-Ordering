import React from "react";
import { Table, Container, Button, Col, Image } from "react-bootstrap";

import AlertMessage from "../../components/AlertMessage";
import AddCuisinePage from "./AddCuisinePage";

const CuisinesListPage = () => {
  const [cuisines, setCuisines] = React.useState(
    JSON.parse(localStorage.getItem("cuisines")) || []
  );
  const deleteHandler = (id) => {
    const cuisinesListUpdated = cuisines.filter(
      (cuisine) => cuisine.id != id
    );
    setCuisines(cuisinesListUpdated);
  };
  const [showCuisine, setShowCuisine] = React.useState(true)

  const handleAddCuisine = (e) => {
    e.preventDefault();
    setShowCuisine(false)
  }

  return (
    <>
      {/* Implement Task 2.b - Displaying all cuisines records in a tabular structure */}
      {showCuisine ? (
        <>
        <Button variant="primary" onClick={handleAddCuisine} style={{marginBottom: "4px"}}>
          Add Cuisine +
        </Button>
        <Container>
          <h2>List of Cuisines</h2>
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
              {cuisines.map((cuisine) => (
                <tr key={cuisine.id}>
                  <td>{cuisine.id}</td>
                  <td>{cuisine.name}</td>
                  <td>{cuisine.description}</td>
                  <td>
                    <Image src={cuisine.image} width={100} height={100} rounded />
                  </td>
                  <td>
                    <Button variant="secondary" style = {{ marginBottom: "8px"}}>
                        Edit
                      </Button>
                      <Button variant="danger" onClick={() => deleteHandler(cuisine.id)} >
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
        <AddCuisinePage />
      )}
    </>
  );
};

export default CuisinesListPage;
