import React from 'react';
import { Link } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};


function Login(props) {
    const {
        user,
        signOut,
        signInWithGoogle,

    } = props;
    return (
        <div>
            <h1> Login </h1>
            <br /><br />
            {
                user
                    ?
                    <p>Hello, {user.displayName}</p>

                    : <p>Please sign in.</p>
            }



            {
                user
                    ? <button onClick={signOut}>Sign out</button>
                    :
                    <div>
                        <button onClick={signInWithGoogle}>Sign in with Google</button>
                    </div>
            }
            <br /><br /><br />
            <button>
                <Link to="/"> Back to Home</Link>
            </button>

        </div>
    )
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);