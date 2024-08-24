import React from 'react';
import styles from './WhoAreYou.module.css';

const NavLink = ({ children }) => {
    return (
        <a href="#" className={styles.navLink}>
            {children}
        </a>
    );
};

export default NavLink;