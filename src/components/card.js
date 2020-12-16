import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



// background: #f5f5f5;

const Details = styled.div`
    background: #f5f5f5;
    height: 100px;
    padding: 5%;
`
const Img = styled.img`
    width: 100%;
    height: 200px;
    width: 200px;
    border: 2px solid white;
`
const Main = styled.div`
    border: 1px solid lightgrey;
    width: 200px;
    padding: 3%;
    box-shadow: 1px 1px 5px 1px lightgrey;

`
function Card(props) {
    const title = props.title;
    const image = props.image;
    const price = props.price;
    const description = props.description;
    return (
        <Main>
            <Img src={image} />
            <Details>
                <b> {title} </b>
            </Details>

        </Main>
    )
}

export default Card;