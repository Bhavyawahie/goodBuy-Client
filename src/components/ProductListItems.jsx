import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Rating from "./Rating";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { LinkContainer } from "react-router-bootstrap";

const ProductListItems = ({ product }) => {
	const location = useLocation();
	return(
            <Card className="my-1 mx-0 rounded d-flex flex-row product-card align-items-center py-3">
                <Col xs={5}>
                    <LinkContainer to={`/product/${product._id}`}>
                        <Card.Img src={product.image} variant="top"/>
                    </LinkContainer>
                </Col>
                <Col>
                <Card.Body>
                    <LinkContainer to={`/product/${product._id}`}>
                        <Card.Title as="div" className='d-flex'>
                            <span class="d-inline-block text-truncate" style={{maxWidth: "150px"}}>{product.name}</span>
                        </Card.Title>
                    </LinkContainer>
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
