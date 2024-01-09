import React, { useState, useEffect } from 'react';
import { NavLink ,Outlet} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from 'react-redux'
const AppNavbar = () => {
    const cart = useSelector((state) => state.cart1);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsNavbarFixed(!isTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <>
            <Navbar bg="light" expand="lg" className={isNavbarFixed ? 'fixed-top' : ''}>
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Logo
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavLink className="nav-link active" to="/">Home</NavLink>
                            <NavLink className="nav-link active" to="products">Products</NavLink>
                            <NavLink className="nav-link active" to="/cart">Cart - {cart.length}</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <Outlet />
        </>
    );
};
export default AppNavbar;