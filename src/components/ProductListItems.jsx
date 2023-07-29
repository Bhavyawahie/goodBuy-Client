import React from "react";
import { Card, Col, Row } from "react-bootstrap";
// import { Link } from "react-router-bootstrap";
import Rating from "./Rating";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const ProductListItems = ({ product }) => {
	const location = useLocation();
	return(
            <Card className="my-1 mx-0 rounded d-flex flex-row product-card align-items-center py-3">
                <Col xs={5}>
                    <Link to={`/product/${product._id}`}>
                        <Card.Img src={product.image} variant="top"/>
                    </Link>
                </Col>
                <Col>
                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as="div" className='d-flex'>
                            <span class="d-inline-block text-truncate" style={{maxWidth: "150px"}}>{product.name}</span>
                        </Card.Title>
                    </Link>
                    <Card.Text as="div">
                        <Rating value={product.rating} text={location.pathname === "/" ? "" : `${product.numReviews} reviews`}/>
                    </Card.Text>
                    <Card.Text as="h3">₹{product.price}</Card.Text>
                </Card.Body>
                </Col>
            </Card>
    )
};

export default ProductListItems
