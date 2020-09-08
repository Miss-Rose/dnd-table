import React from 'react';
import styled from 'styled-components';

const Btn = styled.span`
    background-color: #38bae5;
    border: 1px solid black;
    border-radius: 5%;
    padding: 5px;
    color: white;
    margin 0 0 0 auto;
  
`;

const Button = ({type, onClick, children}) => {
    return (
        <Btn
            type={type}
            onClick={onClick}
        >
            {children}
        </Btn>
    );
};

export default Button;
