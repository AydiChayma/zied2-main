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
                        <li> <div className={styles.Overview}><FontAwesomeIcon icon={faThLarge} /> Aperçu</div></li>
                        <a href="Schedual"><li><FontAwesomeIcon icon={faCalendarAlt} /> Calendrier</li></a>
                        <li><FontAwesomeIcon icon={faCreditCard} /> Paiements</li>
                        <li><FontAwesomeIcon icon={faUserFriends} /> Nombre d'enfants</li>
                        <li><FontAwesomeIcon icon={faFolder} /> Cours</li>
                        <li><FontAwesomeIcon icon={faCog} /> Paramètres</li>
                        <li><FontAwesomeIcon icon={faPlusCircle} /> Ajouter des clubs</li>
                        <li><FontAwesomeIcon icon={faRobot} /> Robot</li>
                    </ul>
                </nav>
                <button className={styles.logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Se déconnecter</span>
                </button>
            </aside>
            <main className={styles.mainContent}>
                <header className={styles.headerContainer}>
                    <h1 className={styles.pageTitle}>Comptes</h1>
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
                        <p>Ajouter un profil</p>
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
                    <h2>Rappels</h2>
                    <div className={styles.reminder}>
                        <span className={styles.reminderIcon}>🔔</span>
                        <div className={styles.reminderText}>
                            <p>Atelier</p>
                            <small>10:00 AM - 12:00 PM</small>
                        </div>
                    </div>
                    <div className={styles.reminder}>
                        <span className={styles.reminderIcon}>📝</span>
                        <div className={styles.reminderText}>
                            <p>Devoirs</p>
                            <small>02:00 PM - 04:00 PM</small>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default AccountsPage;
