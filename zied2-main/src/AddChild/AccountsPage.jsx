import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faCalendarAlt, faCreditCard, faUserFriends, faFolder, faCog, faPlusCircle, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Component from './Component 2.png'
import styles from './AccountsPage.module.css';
function AccountsPage() {
    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccbe73435245c28562767d3699b007136d11b2bcddbc8b19af72425ec1a65406?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                        alt="Logo"
                        className={styles.logo}
                    />
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><FontAwesomeIcon icon={faThLarge} /> Overview</li>
                        <li><FontAwesomeIcon icon={faCalendarAlt} /> Schedule</li>
                        <li><FontAwesomeIcon icon={faCreditCard} /> Payments</li>
                        <li><FontAwesomeIcon icon={faUserFriends} /> Number of children</li>
                        <li><FontAwesomeIcon icon={faFolder} /> Courses</li>
                        <li><FontAwesomeIcon icon={faCog} /> Settings</li>
                        <li><FontAwesomeIcon icon={faPlusCircle} /> Add clubs</li>
                        <li><FontAwesomeIcon icon={faRobot} /> Robot</li>
                    </ul>
                </nav>
                <button className={styles.logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Log out</span>
                </button>
            </aside>
            <main className={styles.mainContent}>
                <header className={styles.headerContainer}>
                    <h1 className={styles.pageTitle}>Accounts</h1>
                </header>
                <section className={styles.accounts}>
                    <div className={styles.account}>
                        <div className={styles.accountIcon} style={{ backgroundColor: '#4f90ff' }}></div>
                        <p>Wael</p>
                    </div>
                    <div className={styles.account}>
                        <div className={styles.accountIcon} style={{ backgroundColor: '#ffba42' }}></div>
                        <p>Eya</p>
                    </div>
                    <div className={styles.account}>
                        <div className={styles.addProfileIcon}>+</div>
                        <p>Add profile</p>
                    </div>
                </section>
            </main>
            <aside className={styles.profileSidebar}>
                <div className={styles.profile}>
                    <img src={Component} alt="Profile" />
                    <p>Irfan Ahsan</p>
                </div>
                <hr />
                <div className={styles.reminders}>
                    <h2>Reminders</h2>
                    <div className={styles.reminder}>
                        <span className={styles.reminderIcon}>🔔</span>
                        <div className={styles.reminderText}>
                            <p>Workshop</p>
                            <small>10:00 AM - 12:00 PM</small>
                        </div>
                    </div>
                    <div className={styles.reminder}>
                        <span className={styles.reminderIcon}>📝</span>
                        <div className={styles.reminderText}>
                            <p>Homework</p>
                            <small>02:00 PM - 04:00 PM</small>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default AccountsPage;
