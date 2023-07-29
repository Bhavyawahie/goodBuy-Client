import React, {useEffect} from "react";
import FilterSidebar from "../components/FilterSidebar";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Button, Modal } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { clearAllFilters, excludeOutOfStockProducts, filteredProductsViaBrands, listProducts, sortProducts } from "../actions/productActions";
import { PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
import { useState } from "react";
import ProductListItems from "../components/ProductListItems";
import FilterModal from "../components/ProductListItems";

const SearchScreen = ({match}) => {
    const [show, setShow] = useState(false);
    const [brands, setBrands] = useState([])
    const category = match.params.category
    const pageNumber = match.params.pageNumber || 1
    const location = useLocation()
    const keyword = match.params.keyword
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products, page, pages, filteredProducts, sortBy, appliedFilters} = productList
    // const productSort = useSelector(state => state.productSort)
    // const {products: {updatedProducts}} = productSort
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const clearAllFiltersHandler = () => {
        dispatch(clearAllFilters())
    }

    const handleSort = (e) => {
        let {value} = e.target
        if(value === "DEFAULT") {
            dispatch(listProducts(keyword, pageNumber, category))
        }
        dispatch(sortProducts(value))
    }

    const outOfStockHandler = (e) => {
        const {checked} = e.target
        if(checked) {
            dispatch(excludeOutOfStockProducts(true))
        } else {
            dispatch(excludeOutOfStockProducts(false))
        }
    }

    const brandFilterHandler = (e, brand) => {
        if(e.target.checked) {
            setBrands(state => {
                return [...state, brand]
            })
        } else {
            setBrands(state => {
                return [...state.filter(b => b !== brand)]
            })
        }
    }

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber]);

    useEffect(() => {
        if(appliedFilters.indexOf("EXCLUDE_OUT_OF_STOCK") == -1) {
            dispatch(sortProducts(sortBy))
        } 
    }, [dispatch, appliedFilters, filteredProducts])
    
    useEffect(() => {
        if(brands.length > 0 && appliedFilters.includes("FILTER_BY_BRAND") && appliedFilters.includes("EXCLUDE_OUT_OF_STOCK")) {
            setTimeout(() => {
                dispatch(excludeOutOfStockProducts(appliedFilters.includes("EXCLUDE_OUT_OF_STOCK")))
            }, 1010);
        }
    }, [dispatch, appliedFilters, brands])

    useEffect(() => {
        let timer = setTimeout(() => {
            if(brands.length > 0) {
                dispatch(filteredProductsViaBrands(brands))
            }          
        }, 1000)
        if(brands.length === 0  && appliedFilters.includes("FILTER_BY_BRAND")) {
            dispatch(filteredProductsViaBrands([...products.map(p => p.brand)]))
        }
        return () => {
            clearTimeout(timer)
        }
    }, [brands])

	return (
        <>
            <Modal show={show} fullscreen onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Filters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FilterModal/>
                </Modal.Body>
            </Modal>
        <Row>
            <FilterSidebar handleSort={handleSort} handleExcludeOutOfStock={outOfStockHandler} handleClearAllFilters={clearAllFiltersHandler} handleBrandFilteration={brandFilterHandler}/>
            <Col>
                    {
                    loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                        <>
                            <Row> 
                                <Row>
                                    <Col className="d-flex justify-content-end">
                                        <Button className="filter-btn" onClick={handleShow}>Filters</Button>
                                    </Col>
                                </Row>
                                <Row className="mt-5 py-2 d-flex justify-content-center product-card-default">
                                    {
                                        filteredProducts.map(product => (
                                            <Col 
                                                md={4}
                                                lg={4}
                                                xl={3}
                                                key={product._id}>
                                                <Product productContent={product}/>
                                            </Col>
                                        ))
                                    } 
                                </Row>
                                <Row className="mt-1 d-flex justify-content-center product-card-list">
                                    {
                                        filteredProducts.map(product => (
                                            <Col 
                                                md={4}
                                                lg={4}
                                                xl={3}
                                                key={product._id}>
                                                <ProductListItems product={product}/>
                                            </Col>
                                        ))
                                    } 
                                </Row>
                            </Row>
                            <Container className='d-flex justify-content-center mt-5'>
                                <Paginate pages={pages} page={page} pathname={location.pathname.split("/")[1]} keyword={keyword} category={match.params.category} />
                            </Container>  
                        </>
                    )
                }  
            </Col>
        </Row>
        </>
    );
};

export default SearchScreen;
