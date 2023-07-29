import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const FilterSidebar = ({
	handleSort,
	handleExcludeOutOfStock,
	handleClearAllFilters,
	handleBrandFilteration,
    handleShowModal
}) => {
	const location = useLocation();
	const dispatch = useDispatch();
	const distinct = (value, index, self) => self.indexOf(value) === index;
	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages, sortBy } = productList;

	const brands = products
		.map((product) => product.brand)
		.filter(distinct)
		.sort();
	const categories = products
		.map((product) => product.category)
		.filter(distinct)
		.sort();

	return (
		<Row className="filter-component position-relative h-100 overflow-none w-100 modal-filter">
			<Col className="p-4">
				<div className="sort-container px-2 mb-3">
					<h4>Sort by Price:</h4>
					<Form.Control
						as="select"
						className="w-50"
						size="sm"
						onChange={(e) => handleSort(e)}
					>
						<option value="DEFAULT">Relevance</option>
						<option value="LOW_TO_HIGH">Low to High</option>
						<option value="HIGH_TO_LOW">High To Low</option>
					</Form.Control>
				</div>

				<div className="filter-container px-2">
					<h4>Availibity</h4>
					<Form.Check
						label="Exclude Out of stock"
						type="checkbox"
						className="my-3"
						onChange={(e) => handleExcludeOutOfStock(e)}
					/>
					<h4>Pricing</h4>
					<Form.Control
						className="txt-range my-3"
						type="range"
						min="0"
						max="30000"
						step="100"
						value="0"
					/>
					<h4>Brands</h4>
					<div className="mb-3">
						{brands.map((brand) => (
							<Row>
								<label key={brand}>
									<input
										type="checkbox"
										onClick={(e) =>
											handleBrandFilteration(e, brand)
										}
										// checked={brandFilter.some(
										// (value) => value === brand
										// )}
									/>{" "}
									{brand}{" "}
								</label>
							</Row>
						))}
					</div>
					{location.pathname.indexOf("/categories") === 0 ? (
						<></>
					) : (
						<>
							<h4>Categories</h4>
							{categories.map((category) => (
								<Row>
									<label key={category}>
										<input
											type="checkbox"
											onChange={() =>
												dispatch({
													type: "TOGGLE_CATEGORY",
													payload: category,
												})
											}
											// checked={categoryFilter.some(
											//     (value) => value === category
											// )}
										/>{" "}
										{category}{" "}
									</label>
								</Row>
							))}
						</>
					)}
				</div>
			</Col>
			<Row
				xs={3}
				className="flex-container filter-header d-flex justify-content-between ms-3 align-items-end py-3"
			>
				<Button
					variant="clear"
					className="btn-outline-info btn-sm"
					onClick={handleClearAllFilters}
				>
					Clear All
				</Button>
				<Button
					variant="clear"
					className="btn-outline-success btn-sm"
					onClick={handleShowModal}
				>
					Apply
				</Button>
			</Row>
		</Row>
	);
};

export default FilterSidebar;
