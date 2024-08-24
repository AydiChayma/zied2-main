import React from 'react';
import styles from './WhoAreYou.module.css';
import OptionButton from './OptionButton';

const Option = ({ imageSrc, buttonText, buttonType, buttonStyle }) => {
    return (
        <>
            <div className={styles.optionContent}>
                <img loading="lazy" src={imageSrc} alt={`${buttonText} option`} className={styles.optionImage} />
                <OptionButton buttonType={buttonType} buttonStyle={buttonStyle}>{buttonText}</OptionButton>
            </div>
        </>

    );
};

export default Option;