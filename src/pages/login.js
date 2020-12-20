import React from 'react';
import { Link } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const Main = styled.div`
    border: 1px solid lightgrey;
    margin: 5%;
    border-radius: 4px;
    padding: 3%;
    text-align: center;
    width: 500px;
`
const GSignin = styled.button`

`

function Login(props) {
    const {
        user,
        signOut,
        signInWithGoogle,

    } = props;
    return (
        <div><center>
            <Main>
                {
                    user
                        ?
                        <p>Welcome, {user.displayName}</p>

                        : <p>Please sign in.</p>
                }



                {
                    user
                        ? <button onClick={signOut}>Sign out</button>
                        :
                        <div>
                            <GSignin onClick={signInWithGoogle}>Sign in with Google</GSignin>
                        </div>
                }
                <button>
                    <Link to="/"> Back to Home</Link>
                </button>

            </Main></center></div>
    )
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);