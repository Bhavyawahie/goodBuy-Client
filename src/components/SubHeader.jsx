import React, { useState } from "react";
import {Container, Nav, NavDropdown, Dropdown, DropdownButton,} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SubHeader = () => {
	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);

	const handleMouseEnter1 = () => {
		setIsOpen1(true);
	};
	const handleMouseEnter2 = () => {
		setIsOpen2(true);
	};
	const handleMouseEnter3 = () => {
		setIsOpen3(true);
	};

	const handleMouseLeave1 = () => {
		setIsOpen1(false);
	};
	const handleMouseLeave2 = () => {
		setIsOpen2(false);
	};
	const handleMouseLeave3 = () => {
		setIsOpen3(false);
	};
	return (
		<div className="subheader">
			<Container>
				<Nav className="d-flex">
					<Dropdown>
						<Dropdown.Toggle
							onMouseEnter={handleMouseEnter1}
							onMouseLeave={handleMouseLeave1}
							as="p"
							id="dropdown-item-button"
							title="Dropdown button"
							className="my-0 py-2 pe-2 me-2"
						>
							<strong>Categories</strong>
						</Dropdown.Toggle>
						<Dropdown.Menu	show={isOpen1}	onMouseEnter={handleMouseEnter1}  onMouseLeave={handleMouseLeave1}>
                            <Dropdown drop='right'>
                                <Dropdown.Toggle as='span' variant="none" drop='right' align='center' id='dropdown-button-drop-right' title='Electronics' className="ms-2 ps-3 pe-3">
                                    Electronics
                                </Dropdown.Toggle>
                                <Dropdown.Menu drop='right'>
                                    <Dropdown.Item >Action</Dropdown.Item>
                                    <Dropdown.Item>Another action</Dropdown.Item>
                                    <Dropdown.Item>Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown drop='right'>
                                <Dropdown.Toggle as='span' variant="none" drop='right' align='center' id='dropdown-button-drop-right' title='Electronics' className="ms-2 ps-3 pe-3">
                                    Electronics
                                </Dropdown.Toggle>
                                <Dropdown.Menu drop='right'>
                                    <Dropdown.Item ></Dropdown.Item>
                                    <Dropdown.Item>Another action</Dropdown.Item>
                                    <Dropdown.Item>Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown drop='right'>
                                <Dropdown.Toggle as='span' variant="none" drop='right' align='center' id='dropdown-button-drop-right' title='Electronics' className="ms-2 ps-3 pe-3">
                                    Electronics
                                </Dropdown.Toggle>
                                <Dropdown.Menu drop='right'>
                                    <Dropdown.Item >Action</Dropdown.Item>
                                    <Dropdown.Item>Another action</Dropdown.Item>
                                    <Dropdown.Item>Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown>
						<Dropdown.Toggle
							onMouseEnter={handleMouseEnter2}
							onMouseLeave={handleMouseLeave2}
							as="p"
							id="dropdown-item-button"
							title="Dropdown button"
							className="my-0 py-2 pe-2 me-2"
						>
							<strong>Best Selling</strong>
						</Dropdown.Toggle>
						<Dropdown.Menu
							show={isOpen2}
							onMouseEnter={handleMouseEnter2}
							onMouseLeave={handleMouseLeave2}
						>
    						<LinkContainer to="/categories/Televisions&Accessories">
                                <Dropdown.Item>Televisions & Accessories</Dropdown.Item>
                            </LinkContainer>	
							<Dropdown.Item>Another action</Dropdown.Item>
							<Dropdown.Item>Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown>
						<Dropdown.Toggle
							onMouseEnter={handleMouseEnter3}
							onMouseLeave={handleMouseLeave3}
							as="p"
							id="dropdown-item-button"
							title="Dropdown button"
							className="my-0 py-2 pe-2 me-2"
						>
							<strong>What's New</strong>
						</Dropdown.Toggle>
						<Dropdown.Menu
							show={isOpen3}
							onMouseEnter={handleMouseEnter3}
							onMouseLeave={handleMouseLeave3}
						>
							<Dropdown.Item>Action</Dropdown.Item>
							<Dropdown.Item>Another action</Dropdown.Item>
							<Dropdown.Item>Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Container>
		</div>
	);
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
