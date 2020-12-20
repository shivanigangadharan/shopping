import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card';

function Cart(props) {
    useEffect(() => {
        console.log('received id list = ', props.location.params.itemList[0].title);
        // setId(props.location.params.itemlist.id);
        // setTitle(props.location.params.itemlist.title);

    })
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    return (
        <div>
            <h1> Carts </h1>

            <button>
                <Link to="/products"> Back to Products </Link>
            </button>

            <Card showadd='No' />

        </div>
    )
}

export default Cart;