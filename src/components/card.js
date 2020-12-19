import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';



// background: #f5f5f5;

const Details = styled.div`
    // height: 110px;
    padding: 5%;
    // background: yellow;
    font-size: 100%;
    font-weight: light;
    display: flex;
    flex-direction: column;
`
const Img = styled.img`
    width: 100%;
    height: 200px;
    // width: 200px;
    border: 2px solid white;
`
const Main = styled.div`
    border: 1px solid lightgrey;
    width: 200px;
    padding: 3%;
    margin-bottom: 15%;
    box-shadow: 1px 1px 5px 1px lightgrey;
`
const Btn = styled.button`
    padding: 3%;
    outline: none;
    border: 2px solid white;
    box-shadow: 1px 1px 1px 1px lightgrey;
`
function Card(props) {
    useEffect(() => {
        setTitle(props.title);
        setImage(props.image);
        setId(props.id);
        setPrice(props.price);
    }
    )
    function handleAdd() {
        // setAddedItems(addedItems.concat(props.id));
        props.parentCallback({
            id: id
        });
        console.log('id passed = ', id);
        if (add == 'Add to cart') {
            setAdd('Added');
            setBg('green');
            setColor('white');
        }
        else {
            setAdd('Add to cart');
            setBg('orange');
            setColor('black');
        }
    }

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [id, setId] = useState();
    const [add, setAdd] = useState('Add to cart');
    const [bg, setBg] = useState('orange');
    const [color, setColor] = useState('black');
    const [addedItems, setAddedItems] = useState([]);
    // const description = props.description;
    return (
        <Main>
            <Img src={image} />
            <Details>
                <b> {title} </b>
                <p> $ {price}</p>
            </Details>
            <Btn
                style={{
                    'background': bg,
                    'color': color
                }}

                onClick={handleAdd} to={
                    {
                        pathname: '/products',
                        params: {
                            id: { id }
                        }
                    }
                }
            > {add} </Btn>

        </Main>
    )
}

export default Card;