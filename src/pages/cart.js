import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
    useEffect(() => {
        // console.log('received id list = ', props.location.params.idlist.idlist);
        setId(props.location.params.idlist.idlist);
    })
    const [id, setId] = useState();
    return (
        <div>
            <h1> Carts </h1>

            <button>
                <Link to="/products"> Back to Products </Link>
            </button>
        </div>
    )
}

export default Cart;