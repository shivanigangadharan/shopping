import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import shop from '../shop.png';


const Nav = styled.nav`
    padding-left: 30px;
`

function Navbar() {
    return (
        <div>
            <Nav className="navbar-fixed">
                <div class="nav-wrapper">
                    <a href="/" class="brand-logo" style={{ 'color': 'white', 'outline': 'none' }} >ShoppingGo</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li> <Link to="/products">
                            <li><a href="sass.html" style={{ 'color': 'white', 'outline': 'none' }}> View our products</a></li>
                        </Link>
                        </li>
                        <li>
                            <Link style={{ 'color': 'white', 'outline': 'none' }} to="/login">
                                <li><a class="waves-effect waves-light btn" style={{ 'color': 'white', 'outline': 'none' }}>Login</a></li>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Nav>

            <ul class="sidenav" id="mobile-demo">
                <li><Link to="/products">
                    <li><a href="sass.html">View our products</a></li>
                </Link></li>
                <li>
                    <Link to="/login">
                        <li><a class="waves-effect waves-light btn">Login</a></li>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
