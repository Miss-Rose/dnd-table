import React from 'react';
import './inputStyle.css';

const Input = ({onChange, value, type, placeholder}) => {
    return (

        <div className='form-input' >
            <input className='form-control'
                   placeholder={placeholder}
                   type={type}
                   onChange={onChange}
                   value={value}/>
        </div>

    );
};

export default Input;
