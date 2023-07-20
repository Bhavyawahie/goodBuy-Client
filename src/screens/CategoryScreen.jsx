import React, {useEffect} from "react";
import FilterSidebar from "../components/FilterSidebar";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { listProducts, sortProducts } from "../actions/productActions";
import { PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

const CategoryScreen = ({match}) => {
    const category = match.params.category
    const pageNumber = match.params.pageNumber || 1
    const location = useLocation()
    const keyword = ""
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products, page, pages} = productList
    const productSort = useSelector(state => state.productSort)
    const {products: {updatedProducts}} = productSort

    const handleSortLowToHigh = () => {
        dispatch(sortProducts("LOW_TO_HIGH"))
    }
    const handleSortHighToLow = () => {
        dispatch(sortProducts("HIGH_TO_LOW"))
    }

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber, category))
    }, [dispatch, keyword, pageNumber, category]);

    useEffect(() => {
        if(updatedProducts) {
            dispatch({type: PRODUCT_LIST_SUCCESS, payload: updatedProducts})
        }
    }, [updatedProducts])

	return (
        <Row>
            <FilterSidebar handleSortLowToHigh={handleSortLowToHigh} handleSortHighToLow={handleSortHighToLow}/>
            <Col>
                    {
                    loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                        <>
                            <Row className="mt-5 pt-5"> 
                                <Row className="mt-4">
                                    <Col className="d-flex justify-content-end"></Col>
                                </Row>
                            {
                                products.map(product => (
                                    <Col 
                                        md={4}
                                        lg={4}
                                        xl={3}
                                        key={product._id}>
                                        <Product productContent={product}/>
                                    </Col>
                                ))
                            } </Row>
                            <Container className='d-flex justify-content-center mt-5'>
                                <Paginate pages={pages} page={page} pathname={location.pathname.split("/")[1]} keyword={keyword ? keyword : match.params.category} />
                            </Container>  
                        </>
                    )
                }  
            </Col>
        </Row>
    );
};

export default CategoryScreen;
