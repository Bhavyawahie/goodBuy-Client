import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import Rating from './Rating'

const Product = ({ productContent }) => {
    const location = useLocation()
    return (
        <Card className="my-3 mx-0 rounded d-flex product-card">
            <Link to={`/product/${productContent._id}`}>
                <Card.Img src={productContent.image} variant="top"/>
            </Link>
            <Card.Body>
                <Link to={`/product/${productContent._id}`}>
                    <Card.Title as="div" className='d-flex'>
                        <strong className='text-nowrap text-truncate'>{productContent.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <Rating value={productContent.rating} text={location.pathname === "/" ? "" : `${productContent.numReviews} reviews`}/>
                </Card.Text>
                <Card.Text as="h3">₹{productContent.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
