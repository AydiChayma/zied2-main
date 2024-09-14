import React from 'react';
import styles from './RobotImage.module.css';

const RobotImage = () => {
    return (
        <div className={styles.robotImageContainer}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d033a5206144d16025a7085846a56141b6cde5f9cbe8f816b8d9719b5c7b575d?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="Robot illustration" className={styles.robotImage} />
        </div>
    );
};

export default RobotImage;