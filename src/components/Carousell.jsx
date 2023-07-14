import React from "react";
import { Carousel, CarouselItem, Col, Row } from "react-bootstrap";
import Product from "./Product";

const Carousell = ({ products }) => {
    const getViewport = () =>  {
        const width = Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0
        );
        if (width <= 576) return "xs";
        if (width <= 768) return "sm";
        if (width <= 992) return "md";
        if (width <= 1200) return "lg";
        return "xl";
    }
	const filterfx = (item, idx, lb, hb) => {
		let lower_index, higher_index;
		switch (getViewport()) {
			case "xl":
				lower_index = lb;
				higher_index = hb;
                break;
			case "lg":
				lower_index = lb;
				higher_index = hb;
                break;
			case "md":
				lower_index = lb;
				higher_index = hb;
                break;
			case "sm":
				lower_index = lb;
				higher_index = hb-1;
                break;
			case "xs":
				lower_index = lb;
				higher_index = hb;
                break;
            default:
                break;
		}
		if (idx >= lower_index && idx < higher_index) {
			return item;
		}
	};
	return (
		<Row className="latest-product-carousel">
			<Carousel controls={true} interval={null} slide={false}>
				<CarouselItem interval={null} className="carousel-item">
					<Row className="d-flex">
						{
                            products.filter((item, index) => filterfx(item, index, 0, 4)).map((p) => (
							<Col xl={3} lg={3} md={3} sm={3} xs={6} key={p._id}>
								<Product productContent={p} />
							</Col>
						))}
					</Row>
				</CarouselItem>
				<CarouselItem interval={null} className="carousel-item">
					<Row className="d-flex">
						{
                            products.filter((item, index) => filterfx(item, index, 4, 8)).map((p) => (
							<Col xl={3} lg={3} md={3} sm={3} xs={6} key={p._id}>
								<Product productContent={p} />
							</Col>
						))}
					</Row>
				</CarouselItem>
				<CarouselItem interval={null} className="carousel-item">
					<Row className="d-flex">
                        {
                            products.filter((item, index) => filterfx(item, index, 8, 12)).map((p) => (
							<Col xl={3} lg={3} md={3} sm={3} xs={6} key={p._id}>
								<Product productContent={p} />
							</Col>
						))}
					</Row>
				</CarouselItem>
			</Carousel>
		</Row>
	);
};

export default Carousell;
