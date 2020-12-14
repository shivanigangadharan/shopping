import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div>
            <h1> Homepage </h1>

            <button>
                <Link to="/login"> Login </Link>
            </button>

            <button>
                <Link to="/products"> View our products </Link>
            </button>

        </div>
    )
}

export default Homepage;