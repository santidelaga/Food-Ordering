import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import categories from "../../categories";
import cuisines from "../../cuisines";
import restaurants from "../../restaurants";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying cuisine names and images */}
        <h2>Try New Cuisines</h2>
        <Row>
          {cuisines.map(cuisine => (
            <Col key={cuisine.id} sm={6} md={4} lg={3} xl={2}>
              <ItemCard item={cuisine} itemName = "cuisine" />
            </Col>
          )
          )}
        </Row>
      </div>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying category names and images */}
        <h2>Get Inspiration for Your Order!</h2>
        <Row>
          {categories.map(category => (
            <Col key={category.id} sm={6} md={4} lg={3} xl={2}>
              <ItemCard item={category} itemName = "category" />
            </Col>
          )
          )}
        </Row>
      </div>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying restaurant names and images */}
        <h2>Available Restaurants</h2>
        <Row>
          {restaurants.map(restaurant => (
            <Col key={restaurant.id} sm={8} md={4} lg={2}>
              <ItemCard item={restaurant} itemName = "restaurant" />
            </Col>
          )
          )}
        </Row>
      </div>
    </>
  );
};

export default HomePage;
