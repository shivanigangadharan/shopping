import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card';
import styled from 'styled-components';
import Button from '../components/button';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 28%)
`
const Main = styled.div`
    margin: 5%;
`

function Cart(props) {
    useEffect(() => {
        if (props.location.params == undefined || props.location.params.itemList.length == 0) {
            console.log('ZERO ITEM IN CART');
            setHasitem(false);
        }
        else {
            console.log('received id list = ', props.location.params.itemList);
            setHasitem(true);
            setData(props.location.params.itemList);
        }

    })
    const [data, setData] = useState();
    const [hasitem, setHasitem] = useState(false);
    const resArr = [];
    const filterData = () => {
        // const idlist = [...new Set(data.map(q => q.id))];
        // console.log(idlist);
        data.filter(function (item) {
            var i = resArr.findIndex(x => x.id == item.id);
            if (i <= -1) {
                resArr.push({
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price
                });
            }
            return null;
        });
        console.log(resArr);
    }
    const renderCard = () => {
        if (hasitem) {
            return (
                <Container>
                    {filterData()}
                    {Object.keys(resArr).map((e, i) => {
                        return (
                            <Card
                                title={data[i].title}
                                image={data[i].image}
                                price={data[i].price}
                                showadd='No'
                                id={data[i].id}
                                description={data[i].description}
                            />
                        )
                    })}
                </Container>
            )
        }
        else {
            return (
                <div>
                    <h1> No products in cart as of now. </h1>
                </div>
            )
        }
    }
    return (
        <Main>
            <h1> Cart </h1>


            {renderCard()}


            <div style={{ 'display': 'flex' }}>
                <Link to="/products">
                    <Button color='lightgrey' text="Back to Products" />
                </Link>

                <Link to="/">
                    <Button color='forestgreen' text="Checkout" />
                </Link>
            </div>

        </Main>
    )
}

export default Cart;