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
                        <a href="Paiment"><li><FontAwesomeIcon icon={faCreditCard} /> Paiements</li></a>
                        <a href="Cours"><li><FontAwesomeIcon icon={faFolder} /> Cours</li></a>
                        <a href='Parametre'><li><FontAwesomeIcon icon={faCog} /> Paramètres</li></a>
                        <a href="DecouvrirClub"><li><FontAwesomeIcon icon={faPlusCircle} /> Découvrir les clubs</li></a>
                        <a href="Robot"><li><FontAwesomeIcon icon={faRobot} /> Ajouter Robot</li></a>
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
                    <a href='Signupkid'><div className={styles.account}>
                        <div className={styles.addProfileIcon}>+</div>
                        <p>Ajouter un profil</p>
                    </div></a>
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
