import { color } from 'motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (link) {
            navigate(link);
        }
    };

    return (
        <button 
            className="button"
            onClick={handleClick}
        >
            {text}
        </button>
    );
}
export default Button;