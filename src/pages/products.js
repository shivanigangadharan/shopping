import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div>
            <h1> Products </h1>


            <button>
                <Link to="/"> Back to Home </Link>
            </button>

            {/* only show if user is authenticated */}
            <button>
                <Link to="/cart"> View Cart </Link>
            </button>


        </div>
    )
}

export default Products;