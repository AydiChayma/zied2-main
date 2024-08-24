import React from 'react';
import styles from './WhoAreYou.module.css';

const SocialIcon = ({ src, alt }) => {
    return <img loading="lazy" src={src} alt={alt} className={styles.socialIcon} />;
};

export default SocialIcon;