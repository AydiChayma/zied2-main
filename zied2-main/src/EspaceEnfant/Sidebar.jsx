import React from 'react';
import styles from './Sidebar.module.css';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.userProfile}>
                <div className={styles.image1}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa9f3312e669942a26aa188844ebdfa155c3a9ea225f151a5727fddcd7061c2e?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="" className={styles.backgroundImage} />
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/18c27363c9d580965af063f63ba9f9e3b9836f148fa2c3a1031707019f2ddec9?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="User avatar" className={styles.avatar} />
                </div>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>Sahar ketata</span>
                    <span className={styles.userId}>159874</span>
                </div>
            </div>
            <nav className={styles.navigation}>
                <a href="#" className={styles.navItem1}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/68fc260d8ddb73c633faf6d19a67a8d7a05b28ef57d247514a7cc46c93ac0a8b?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="" className={styles.navIcon} />
                    <p>Calendrier</p>
                </a>
                <a href="#clubs" className={styles.navItem2}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeb08659a4aaaecc3ad9f885575a6b9545adb79e6998874e0e9d21ea37b3ab16?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="" className={styles.navIcon} />
                    <p> Mes clubs</p>
                </a>
                <a href="#courses" className={styles.navItem3}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dc3bce8434dfe2ad24396bcf2225992cf10deff108d6b27083744ef6d86098a?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="" className={styles.navIcon} />
                    <p>Mes cours</p>
                </a>
                <a href="#tasks" className={styles.navItem4}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d77a2b2bf46adeb0a2186ecca5bcf51352fb8a759a027f4be90ffc93779e66?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="" className={styles.navIcon} />
                    <p>Mes tâches</p>
                </a>
            </nav>
            <button className={styles.logoutButton}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b7567e8b4c1a7378229c460bf42669f62bec518c1fe10033bbefc3f9f85284e?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="" className={styles.logoutIcon} />
                Log out
            </button>
        </aside>
    );
}

export default Sidebar;