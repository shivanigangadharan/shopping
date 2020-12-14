import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <h1> Login </h1>


            <button>
                <Link to="/"> Back to Home</Link>
            </button>

        </div>
    )
}

export default Login;