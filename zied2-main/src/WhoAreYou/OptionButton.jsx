import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WhoAreYou.module.css';

const OptionButton = ({ children, buttonType, buttonStyle, navigateTo }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(`Navigating to ${navigateTo}`);
        navigate(navigateTo);
    };
    return (
        <button className={`${styles.optionButton}${styles[buttonType]} ${buttonStyle}`} onClick={handleClick}>
            {children}
        </button>
    );
};

export default OptionButton;