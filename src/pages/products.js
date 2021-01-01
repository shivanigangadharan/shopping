import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/card';
import Button from '../components/button';
import user from './login';

const Main = styled.div`
    margin: 5%;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 28%)
`

function Products() {
    const [data, setData] = useState('None');
    const [childprops, setChildprops] = useState();
    const [itemList, setItemlist] = useState([]);
   
    // to get props from child - card (to get which is to be added)
    const callbackFunction = (childData) => {
        // setChildprops({
        //     id: childData.id,
        //     title: childData.title
        // });
        setItemlist(
            itemList.concat(childData)
        );
        console.log('now id list = ', itemList);
    }
    function handleViewCart() {
        console.log('FINAL PASSING TO CART id list = ', itemList);
    }

    useEffect(() => {
        var data = fetch('https://fakestoreapi.com/products?limit=25')
            .then(res => res.json())
            .then(json => setData(json))
    }
    )
    return (
        <Main>
            <Container>

                {Object.keys(data).map((e, i) => {
                    return (
                        <Card
                            parentCallback={callbackFunction}
                            title={data[i].title}
                            image={data[i].image}
                            price={data[i].price}
                            showadd='Yes'
                            id={data[i].id}
                            description={data[i].description}
                        />
                    )
                })}
            </Container>
    
            <Link
                onClick={handleViewCart} to={
                    {
                        pathname: '/cart',
                        params: {
                            itemList: itemList
                        }
                    }
                }
            >
    
                <button class="btn waves-effect waves-light"
                    style={{
                        'position': 'fixed',
                        'bottom': '20px',
                        'right': '20px',
                    }}
                    type="submit" name="action">
                    View Cart
                    <i class="material-icons right">
                        send
                    </i>
                </button>
            </Link>
        </Main >
    )
}

export default Products;
