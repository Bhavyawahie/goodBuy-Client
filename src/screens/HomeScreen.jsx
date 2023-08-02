import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Product from "../components/Product";
import Meta from "../components/Meta";
import Carousell from "../components/Carousell";
import Message from "../components/Message";
import Loader from "../components/Loader";
import ProductCarousel from "../components/ProductCarousel";

const HomeScreen = ({ match }) => {
	const [viewport, setViewport] = useState("");
	const keyword = match.params.keyword;
	const pageNumber = match.params.pageNumber || 1;
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products} = productList;

	const getViewport = () => {
		const width = Math.max(
			document.documentElement.clientWidth,
			window.innerWidth || 0
		);
		if (width <= 576) return "xs";
		if (width <= 768) return "sm";
		if (width <= 992) return "md";
		if (width <= 1200) return "lg";
		return "xl";
	};

	const handleResize = () => {
		const updatedViewport = getViewport();
		setViewport(updatedViewport);
	};

	useEffect(() => {
		const initialViewport = getViewport();
		setViewport(initialViewport);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	return (
		<>
			<Meta />
			{!keyword ? (
				<ProductCarousel />
			) : (
				<Link to="/" className="btn btn-outline-secondary my-3">
					<i className="fas fa-chevron-left"></i>
				</Link>
			)}
			{!keyword && <h2 className="py-3">Latest Products</h2>}
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : !keyword && (
				<>
					<Carousell products={products} />
					{(viewport === "xs" || viewport === "sm") && (
                        <>
                            <Container className="p-2">
                                <Row>
                                    <Col xs={6} sm={6}><Product productContent={products[products.length - 1]}/></Col>
                                    <Col xs={6} sm={6}><Product productContent={products[products.length - 2]}/></Col>
                                </Row>
                                <Row>
                                    <Col xs={6} sm={6}><Product productContent={products[products.length - 3]}/></Col>
                                    <Col xs={6} sm={6}><Product productContent={products[products.length - 4]}/></Col>
                                </Row>
                            </Container>
                            <h2 className="py-3">Up For Grabs!</h2>
                            <Container className="p-2">
                                <Row>
                                    <Col xs={6} sm={6}><Product productContent={products[products.length - 5]}/></Col>
                                    <Col xs={6} sm={6}><Product productContent={products[products.length - 6]}/></Col>
                                </Row>
                                <Row>
                                    <Col xs={6} sm={6}><Product productContent={products[products.length - 7]}/></Col>
                                    <Col xs={6} sm={6}><Product productContent={products[products.length - 8]}/></Col>
                                </Row>
                            </Container>
                        </>
					)}
				</>
			)}{" "}
		</>
	);
};

export default HomeScreen;
