import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/card';

const Main = styled.div`
    margin: 5%;
`
const Flex = styled.div`

`



function Products() {
    const [data, setData] = useState('None');
    useEffect(() => {
        var data = fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(json => setData(json))
    }
    )
    const prodlist = Object.entries(data);
    return (
        <Main>
            {/* <h1> Products </h1> */}

            {Object.keys(data).map((e, i) => {
                return (
                    <div>
                        <Card
                            title={data[i].title}
                            image={data[i].image}
                            price={data[i].price}
                            description={data[i].description}
                        />
                    </div>
                )
            })}




            <br /><br />




            <button>
                <Link to="/"> Back to Home </Link>
            </button>

            {/* only show if user is authenticated */}
            <button>
                <Link to="/cart"> View Cart </Link>
            </button>


        </Main>
    )
}

export default Products;