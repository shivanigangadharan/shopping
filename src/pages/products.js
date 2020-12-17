import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/card';
import Button from '../components/button';

const Main = styled.div`
    margin: 5%;
`

const Parent = styled.div`
display: grid;
grid-template-columns: repeat(4, 28%)
`


function Products() {
    const [data, setData] = useState('None');
    useEffect(() => {
        var data = fetch('https://fakestoreapi.com/products?limit=5')
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
                    <Button text='View Cart' color='#611a1a' />
                </Link>
            </div >
        </Main >
    )
}

export default Products;