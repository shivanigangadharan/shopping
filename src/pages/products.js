import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/card';
import Button from '../components/button';
import user from './login';

const Main = styled.div`
    margin: 5%;
`

const Parent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 28%)
`

function Products() {
    const [data, setData] = useState('None');
    const [childprops, setChildprops] = useState();

    // to get props from child - card (to get which is to be added)
    const callbackFunction = (childData) => {
        setChildprops({
            id: childData.id,
        });
    }
    function handleViewCart() {
        console.log('child = ', childprops);
        console.log('child = ', childprops);

    }

    useEffect(() => {
        var data = fetch('https://fakestoreapi.com/products?limit=25')
            .then(res => res.json())
            .then(json => setData(json))
    }
    )
    return (
        <Main>
            {/* <h1> Products </h1> */}

            <Parent>

                {Object.keys(data).map((e, i) => {
                    return (
                        <Card
                            parentCallback={callbackFunction}
                            title={data[i].title}
                            image={data[i].image}
                            price={data[i].price}
                            description={data[i].description}
                        />
                    )
                })}
            </Parent>
            <div style={{ 'display': 'flex' }}>
                <Link to="/">
                    <Button text='Back to Home' color='#fc7b03' />
                </Link>

                {/* only show if user is authenticated */}

                <Link to="/cart">
                    <Button onClick={handleViewCart} text='View Cart' color='#611a1a' />
                </Link>
            </div >
        </Main >
    )
}

export default Products;