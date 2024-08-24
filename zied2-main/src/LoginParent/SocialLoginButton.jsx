import React from "react";
import styles from './Loginparent.module.css';

function SocialLoginButton({ src, alt }) {
    return (
        <img loading="lazy" src={src} className={styles.socialLoginButton} alt={alt} />
    );
}

export default SocialLoginButton