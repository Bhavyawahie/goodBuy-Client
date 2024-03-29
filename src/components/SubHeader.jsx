import React, { useState } from "react";
import {Container, Nav, Dropdown,} from "react-bootstrap";
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
                            <LinkContainer to="/categories/Televisions & Accessories">
                                    <Dropdown.Item><strong>Televisions & Accessories</strong></Dropdown.Item>
                                </LinkContainer>	
                                <LinkContainer to="/categories/Home Appliances">
                                    <Dropdown.Item><strong>Home Appliances</strong></Dropdown.Item>
                                </LinkContainer>	
                                <LinkContainer to="/categories/Phones & Wearables">
                                    <Dropdown.Item><strong>Phones & Wearables</strong></Dropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/categories/Computers & Tablets">
                                    <Dropdown.Item><strong>Computers & Tablets</strong></Dropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/categories/Kitchen Appliances">
                                    <Dropdown.Item><strong>Kitchen Appliances</strong></Dropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/categories/Audio & Video">
                                    <Dropdown.Item><strong>Audio & Video</strong></Dropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/categories/Health & Fitness">
                                    <Dropdown.Item><strong>Health & Fitness</strong></Dropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/categories/Grooming & Personal Care">
                                    <Dropdown.Item><strong>Grooming & Personal Care</strong></Dropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/categories/Cameras & Accessories">
                                    <Dropdown.Item><strong>Cameras & Accessories</strong></Dropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/categories/Smart Devices">
                                    <Dropdown.Item><strong>Smart Devices</strong></Dropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/categories/Gaming">
                                    <Dropdown.Item><strong>Gaming</strong></Dropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/categories/Accessories">
                                    <Dropdown.Item><strong>Accessories</strong></Dropdown.Item>
                                </LinkContainer>
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
						<Dropdown.Menu show={isOpen2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
							<LinkContainer to="/product/6434856d047bb80008529476">
								<Dropdown.Item className="text-truncate">OnePlus Nord CE 3 Lite</Dropdown.Item>
							</LinkContainer>	
							<LinkContainer to="/product/612d4a45165dbe19a870ba36">
								<Dropdown.Item>Sony Playstation 4 Pro</Dropdown.Item>
							</LinkContainer>	
							<LinkContainer to="/product/62c5cac36f4bc93be80c7ce4">
								<Dropdown.Item>O General 1.5Ton Window AC</Dropdown.Item>
							</LinkContainer>	
							<LinkContainer to="/product/6133a7c6e6c77b5600b14402">
								<Dropdown.Item>Lenovo Legion 5 Pro</Dropdown.Item>
							</LinkContainer>	
							<LinkContainer to="/product/612d4a45165dbe19a870ba33">
								<Dropdown.Item>Apple Airpods</Dropdown.Item>
							</LinkContainer>	
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
							<LinkContainer to="/product/64b6c9354ba46e0a14ad30be">
								<Dropdown.Item>OnePlus 11R 5G</Dropdown.Item>
							</LinkContainer>	
							<LinkContainer to="/product/64b5a3403b77440008375b95">
								<Dropdown.Item>Realme Narzo 60 Pro</Dropdown.Item>
							</LinkContainer>	
							<LinkContainer to="/product/64b6cbc74ba46e0a14ad3100">
								<Dropdown.Item>Motorola Razr 40</Dropdown.Item>
							</LinkContainer>	
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
