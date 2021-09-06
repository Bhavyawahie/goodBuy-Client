import React, { useEffect} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
// import products from "../products"
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'

const HomeScreen = ({match}) => {
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products, page, pages} = productList

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber]);


    return (
        <>
            <h2 className="py-3">Latest Products</h2>
            {
            loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                <>
                    <Row> {
                        products.map(product => (
                            <Col sm={12}
                                md={6}
                                lg={4}
                                xl={3}
                                key={
                                    product._id
                            }>
                                <Product productContent={product}/>
                            </Col>
                        ))
                    } </Row>
                    <Container className='d-flex justify-content-center mt-5'>
                        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ""} />
                    </Container>  
                </>
            )
        } </>
    )
}

export default HomeScreen
