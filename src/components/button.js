import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    border-radius: 100px;
    border: 2px solid white;
    box-shadow: 1px 1px 7px 3px lightgrey;
    padding: 3%;
    font-size: 115%;
    width: 150px;
    outline: none;
    margin-right: 35px;
    color: white;
    margin-top: 5%;
    &:hover{
        opacity: 0.7;
        transition-duration: 0.5s;
    }
`

function Button(props) {
    const color = props.color;
    const text = props.text;
    return (
        <div>
            <Btn
                style={{
                    'background': color
                }}> {text} </Btn>
        </div>
    )
}

export default Button;