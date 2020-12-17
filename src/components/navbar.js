import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import shop from '../shop.png';

const Main = styled.div`

    width: 100%;
    padding: 1%;
    padding-left: 4%;
    // box-shadow: 1px 1px 4px 1px lightgrey;
    display: flex;
    flex-direction: row;
`
const Img = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 2%;
    margin-top: 1%;
`
function Navbar() {
    return (
        <Main>
            <Img src={shop} />
            <h1> <b> Shopping </b> </h1>
        </Main>
    )
}

export default Navbar;