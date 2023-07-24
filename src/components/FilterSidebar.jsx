import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Row, Col, Form, Button} from 'react-bootstrap'
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


const FilterSidebar = ({handleSortLowToHigh, handleSortHighToLow, handleExcludeOutOfStock, handleClearAllFilters}) => {
    const location = useLocation()
	const dispatch = useDispatch();
	const distinct = (value, index, self) => self.indexOf(value) === index;
	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages, sortBy } = productList;

	const brands = products.map((product) => product.brand).filter(distinct).sort();
	const categories = products
		.map((product) => product.category)
		.filter(distinct).sort();
	

	return (
		<Row className="filter-component position-relative h-100 overflow-auto w-25">
			<div className="flex-container filter-header p-3 d-flex justify-content-between align-items-center">
				<h3 className="txt-header-3">Filters</h3>
				<Button variant="clear" className="btn-outline-info btn-sm" onClick={handleClearAllFilters}>Clear All</Button>
			</div>

			<div className="sort-container p-3">
				<h4>Sort by Price:</h4>
				<Form.Check name="sort" label="Low to High" type="radio"  onChange={handleSortLowToHigh}/>
				<Form.Check name="sort" label="High to Low" type="radio" onChange={handleSortHighToLow}/>
			</div>

			<div className="filter-container p-3">
                <h4>Availibity</h4>
				<Form.Check label="Exclude Out of stock" type="checkbox" className="my-3" onChange={(e) => handleExcludeOutOfStock(e)}/>
				<h4>Pricing</h4>
				<Form.Control
					className="txt-range my-3"
					type="range"
					min="0"
					max="30000"
					step="100"
				/>
				<h4>Brands</h4>
				{
                    brands.map((brand) => (
                    <Row>
                        <label key={brand} >
                            <input
                                type="checkbox"
                                    onChange={() =>
                                    dispatch({
                                        type: "TOGGLE_BRAND",
                                        payload: brand,
                                    })
                                    }
                                    // checked={brandFilter.some(
                                    // (value) => value === brand
                                    // )}
                            />{" "}
                            {brand}{" "}
                        </label>
                    </Row>
                ))}
				{   !location.pathname.indexOf('/categories') === 0 && (

                    <>
                        <h4>Categories</h4>
                            {
                            categories.map((category) => (
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
                )
                }
			</div>
		</Row>
		// <div className="filter-component">
		// 	<div className="flex-container filter-header">
		// 		<h3 className="txt-header-3">Filters</h3>
		// 		<button
		// 			type="button"
		// 			className="btn-clear"
		// 			// onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}
		// 		>
		// 			Clear All
		// 		</button>
		// 	</div>

		// 	<div className="txt-box">
		// 		{" "}
		// 		<input
		// 			className="txt-input"
		// 			type="text"
		// 			value={searchTxt}
		// 			onChange={(e) => setSearchTxt(e.target.value)}
		// 			onKeyDown={searchHandler}
		// 			placeholder="Search Products"
		// 		/>
		// 		<span
		// 			className="txt-icon"
		// 			// onClick={() => {
		// 			// 	dispatch({
		// 			// 		type: "SEARCH_PRODUCT",
		// 			// 		payload: searchTxt,
		// 			// 	});
		// 			// 	setSearchTxt("");
		// 			// }}
		// 		>
		// 			<i className="fas fa-search fa-lg"></i>
		// 		</span>
		// 	</div>

		// 	<div className="sort-container">
		// 		<h4>Sort by Price:</h4>
		// 		<label>
		// 			<input
		// 				type="radio"
		// 				name="sort"
		// 				// onChange={() =>
		// 				// 	dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
		// 				// }
		// 				// checked={sortBy === "LOW_TO_HIGH"}
		// 			/>{" "}
		// 			Low to High
		// 		</label>

		// 		<label>
		// 			<input
		// 				type="radio"
		// 				name="sort"
		// 				// onChange={() =>
		// 				// 	dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
		// 				// }
		// 				// checked={sortBy === "HIGH_TO_LOW"}
		// 			/>{" "}
		// 			High to Low
		// 		</label>
		// 	</div>

		// 	<div className="filter-container">
		// 		<h4>Filters:</h4>
		// 		<label>
		// 			<input
		// 				type="checkbox"
		// 				// onChange={() => dispatch({ type: "TOGGLE_STOCK" })}
		// 				// checked={inStock}
		// 			/>{" "}
		// 			Exclude out of stock{" "}
		// 		</label>
		// 		<label>
		// 			<input
		// 				type="checkbox"
		// 				// onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
		// 				// checked={fastDelivery}
		// 			/>{" "}
		// 			Fast Delivery only{" "}
		// 		</label>
		// 		<label>
		// 			<b>Price Range:</b>
		//             {/* 0 to {priceRange} */}
		// 			<input
		// 				className="txt-range"
		// 				type="range"
		// 				min="0"
		// 				max="30000"
		// 				// value={priceRange}
		// 				step="100"
		// 				// onChange={(event) =>
		// 				// 	dispatch({
		// 				// 		type: "PRICE_RANGE",
		// 				// 		payload: event.target.value,
		// 				// 	})
		// 				// }
		// 			/>
		// 		</label>
		// 		<h4>Brands</h4>
		// 		{brands.map((brand) => (
		// 			<label key={brand}>
		// 				<input
		// 					type="checkbox"
		// 					// onChange={() =>
		// 					// 	dispatch({
		// 					// 		type: "TOGGLE_BRAND",
		// 					// 		payload: brand,
		// 					// 	})
		// 					// }
		// 					// checked={brandFilter.some(
		// 					// 	(value) => value === brand
		// 					// )}
		// 				/>{" "}
		// 				{brand}{" "}
		// 			</label>
		// 		))}
		// 		<h4>Categories</h4>
		// 		{categories.map((category) => (
		// 			<label key={category}>
		// 				<input
		// 					type="checkbox"
		// 					// onChange={() =>
		// 					// 	dispatch({
		// 					// 		type: "TOGGLE_CATEGORY",
		// 					// 		payload: category,
		// 					// 	})
		// 					// }
		// 					// checked={categoryFilter.some(
		// 					// 	(value) => value === category
		// 					// )}
		// 				/>{" "}
		// 				{category}{" "}
		// 			</label>
		// 		))}
		// 	</div>
		// </div>
	);
};

export default FilterSidebar;
