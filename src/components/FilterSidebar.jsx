import React from 'react'

const FilterSidebar = () => {
    const brandArray = state.products.reduce((acc, curr) => acc.includes(curr.company) ? acc : [...acc, curr.company], [])
    return (
        <div className='filter-main'>
            <div className='filter-header'>
                <h3>Filters</h3>
                <button onClick={() => filterDispatch({ type: "CLEAR_FILTER" })} className='clear-filter-btn'>Clear all filters</button>
            </div>
            <div className='filter-child'>

                <h3>Filter by ratings :-</h3>
                <div className='slider-filter'>
                    <div className='slider-title'>
                        <span>
                            <img src={require("../Images/star-icon.png")} alt="" srcSet="" width={"15px"} /> 1
                        </span>
                        <span>
                            5 <img src={require("../Images/star-icon.png")} alt="" srcSet="" width={"15px"} />
                        </span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="5"
                        step="1"
                        list="steplist"
                        value={filterState.filterRating}
                        onChange={(e) => filterDispatch({ type: "RATING_RANGE", payload: e.target.value })}
                    />
                    <datalist id="steplist">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </datalist>
                </div>


                <h3>Filter by Categories :-</h3>
                {state.categories.map((item) => {
                    return <div key={item._id}><label><input type='checkbox' checked={filterState.categoryCheckbox.includes(item.categoryName)} onChange={() => filterDispatch({ type: "ADD_CATEGORY_FIELD", payload: item.categoryName })} />{item.categoryName}</label></div>
                })}

                <h3>Filter by Brand :-</h3>
                {brandArray.map((item, index) => {
                    return <div key={index}><label><input type='checkbox' checked={filterState.brandCheckbox.includes(item)} onChange={() => filterDispatch({ type: "ADD_BRAND_FIELD", payload: item })} />{item}</label></div>
                })}


                <h3>Sort By Price :-</h3>
                <div><label><input type='radio' name='ratings' onClick={() => filterDispatch({ type: "ADD_PRICE_RADIO", payload: "lowtohigh" })} />Price (low to high)</label></div>
                <div><label><input type='radio' name='ratings' onClick={() => filterDispatch({ type: "ADD_PRICE_RADIO", payload: "hightolow" })} />Price (high to low)</label></div>



            </div>

        </div>
    )
}

export default FilterSidebar