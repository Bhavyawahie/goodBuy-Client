import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import logo from "../logo.png";
import { logout } from "../actions/userActions";

const Header = ({ history }) => {
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const logoutHandler = () => {
		dispatch(logout());
	};
	return (
		<header>
			<Navbar variant="light" bg="light" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>
							<img
								alt="bestbuylogo"
								src={logo}
								width="80"
								height="45"
								className="d-inline-block align-top"
							/>
						</Navbar.Brand>
					</LinkContainer>
					<Route
						render={({ history }) => (
							<SearchBox history={history} />
						)}
					/>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-shopping-cart"></i>
									{"  "}Cart
								</Nav.Link>
							</LinkContainer>
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title="Admin" id="adminMenu">
									<LinkContainer to="/admin/userlist">
										<NavDropdown.Item>
											Users
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/productlist">
										<NavDropdown.Item>
											Products
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/orderlist">
										<NavDropdown.Item>
											Orders
										</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
							{userInfo ? (
								<NavDropdown
									title={userInfo.name}
									id="username"
								>
									<LinkContainer to="/profile">
										<NavDropdown.Item>
											Profile
										</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to="/login">
									<Nav.Link>
										<i className="fas fa-user"></i>
										{"  "}Sign in
									</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
