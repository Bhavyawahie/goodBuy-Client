import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ page, pages, isAdmin=false, keyword='', category='' }) => {
    return  pages > 1 && (
        <Pagination>
            {[...Array(pages).keys()].map(x => (
                <LinkContainer key={ x + 1 } to={!isAdmin ? !keyword ? `/categories/${category}/page/${x+1}` : `/search/${keyword}/page/${x+1}` : `/admin/productlist/${x+1}`}>
                    <Pagination.Item active={ x+1 === page }>{x+1}</Pagination.Item>
                </LinkContainer>
            ))}
            <Pagination.Item disabled>{">>"}</Pagination.Item>
        </Pagination>
    )
}


export default Paginate
