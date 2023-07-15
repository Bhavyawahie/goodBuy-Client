import React, {useState} from "react";
import {Container, Nav, NavDropdown} from 'react-bootstrap'

const SubHeader = () => {
    const [isOpen1, setIsOpen1] = useState(false);

    const handleMouseEnter1 = () => {
            setIsOpen1(true);
    };

    const handleMouseLeave1 = () => {
            setIsOpen1(false);
    };
	return (
        <div className="subheader">
            <Container>
                        <Nav className="d-flex" >
                            <div class="dropdown py-2 pl-0">
                                <span class="dropdown-toggle me-3" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </span>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Category 1</a></li>
                                    <li><a class="dropdown-item" href="#">Category 2</a></li>
                                    <li><a class="dropdown-item" href="#">Category 3</a></li>
                                </ul>
                            </div>

                            <div class="dropdown py-2 pl-0">
                                <span class="dropdown-toggle me-3" data-bs-toggle="dropdown" aria-expanded="false">
                                    Best Selling
                                </span>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Product 1</a></li>
                                    <li><a class="dropdown-item" href="#">Product 2</a></li>
                                    <li><a class="dropdown-item" href="#">Product 3</a></li>
                                </ul>
                            </div>

                            <div class="dropdown py-2 pl-0">
                                <span class="dropdown-toggle me-3" data-bs-toggle="dropdown" aria-expanded="false">
                                    What's New
                                </span>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">New Product 1</a></li>
                                    <li><a class="dropdown-item" href="#">New Product 2</a></li>
                                    <li><a class="dropdown-item" href="#">New Product 3</a></li>
                                </ul>
                            </div>
                        </Nav>
            </Container>
        </div>
    )
};

export default SubHeader;



					// <NavDropdown
					// 	title="Best Selling"
					// 	id="Best Selling"
					// 	show={isOpen2}
                    //     onMouseEnter={handleMouseEnter2}
                    //     onMouseLeave={handleMouseLeave2}
					// >
					// 	{[
					// 		{ label: "Product 1", link: "#" },
					// 		{ label: "Product 2", link: "#" },
					// 		{ label: "Product 3", link: "#" },
					// 	].map((item, index) => (
					// 		<NavDropdown.Item key={index} href={item.link}>
					// 			{item.label}
					// 		</NavDropdown.Item>
					// 	))}
					// </NavDropdown>
					// <NavDropdown
					// 	title="What's New"
					// 	id="What's New"
					// 	show={isOpen3}
                    //     onMouseEnter={handleMouseEnter3}
                    //     onMouseLeave={handleMouseLeave3}
					// >
					// 	{[
					// 		{ label: "New Product 1", link: "#" },
					// 		{ label: "New Product 2", link: "#" },
					// 		{ label: "New Product 3", link: "#" },
					// 	].map((item, index) => (
					// 		<NavDropdown.Item key={index} href={item.link}>
					// 			{item.label}
					// 		</NavDropdown.Item>
					// 	))}
					// </NavDropdown>