import React from "react";
import styles from './AccountsPage.module.css';

function NavigationItem({ icon, text }) {
    return (
        <div className={styles.navItem}>
            <img
                loading="lazy"
                src={icon}
                className={styles.navIcon}
                alt=""
            />
            <div>{text}</div>
        </div>
    );
}

export default NavigationItem;