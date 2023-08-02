import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom'

const ProductListItems = ({ productContent }) => {
    const location = useLocation()
	return(
            <Card className="my-1 mx-0 rounded d-flex flex-row product-card align-items-center py-3">
                <Col xs={5}>
                    <Link to={`/product/${productContent._id}`}>
                        <Card.Img src={productContent.image} variant="top"/>
                    </Link>
                </Col>
                <Col>
                <Card.Body>
                    <Link to={`/product/${productContent._id}`}>
                        <Card.Title as="div" className='d-flex'>
                            <span class="d-inline-block text-truncate" style={{maxWidth: "150px"}}>{productContent.name}</span>
                        </Card.Title>
                    </Link>
                    <Card.Text as="div">
                        <Rating value={productContent.rating} text={location.pathname === "/" ? "" : `${productContent.numReviews} reviews`}/>
                    </Card.Text>
                    <Card.Text as="h3">₹{productContent.price}</Card.Text>
                </Card.Body>
                </Col>
            </Card>
    )
};

export default ProductListItems
