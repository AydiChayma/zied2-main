import React from "react";
import styles from './Loginteacher.module.css';

function SocialLoginButton({ src, alt }) {
    return (
        <>
            <img loading="lazy" src={src} className={styles.socialLoginButton} alt={alt} />
            <p>Continuer avec Google</p>
        </>
    );
}

export default SocialLoginButton