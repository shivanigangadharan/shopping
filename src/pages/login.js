import React, { useState } from 'react';
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
const Btn = styled.button`
    background: white;
    border: 1px solid lightgrey;
    padding: 1.5%;
    margin-top: 20px;
    &:hover{
        cursor: pointer;
    }
    `


function Login(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('email = ', email);
        console.log('pwd = ', password);
        const signup = (email, password) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }

    const {
        user,
        signOut,
        signInWithGoogle,

    } = props;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <div><center>
            <Main>
                {
                    user
                        ?
                        <p>Welcome, {user.displayName}</p>

                        : <div>
                            <p>Please sign in.</p>
                            <form>
                                <Input type="email"
                                    onChange={e => { setEmail(e.target.value) }}
                                />
                                <Input type="password"
                                    onChange={e => { setPassword(e.target.value) }}
                                />
                                <br /><br />
                                <Input onClick={handleSubmit} type="submit" value="Login" />
                            </form>
                        </div>

                }



                {
                    user
                        ? <Btn onClick={signOut}>Sign out</Btn>
                        :
                        <div>

                            <Btn onClick={signInWithGoogle}>
                                <img width="15px"
                                    style={{ 'marginRight': '10px' }}
                                    src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" />
                                Sign in with Google</Btn>
                        </div>
                }
                <br />
                <Btn>
                    <Link to="/"> Back to Home</Link>
                </Btn>

            </Main></center></div>
    )
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);