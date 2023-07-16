import React from "react";

const CategoryScreen = ({match}) => {
    const category = match.params.category
	return <div>CategoryScreen - {category}</div>;
};

export default CategoryScreen;
