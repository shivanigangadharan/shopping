import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
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