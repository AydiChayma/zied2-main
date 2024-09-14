import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faCalendarAlt, faCreditCard, faUserFriends, faFolder, faCog, faPlusCircle, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './RobotList.module.css';

function AccountsPage() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedRobot, setSelectedRobot] = useState('');

    const openModal = (robotName) => {
        setSelectedRobot(robotName);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedRobot('');
        setModalOpen(false);
    };

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
                        <a href='AccountsPage'> <li><FontAwesomeIcon icon={faThLarge} /> Aperçu</li></a>
                        <a href="Schedual"><li><FontAwesomeIcon icon={faCalendarAlt} /> Calendrier</li></a>
                        <a href="Paiment"><li><FontAwesomeIcon icon={faCreditCard} /> Paiements</li></a>
                        <a href="Cours"><li><FontAwesomeIcon icon={faFolder} /> Cours</li></a>
                        <a href='Parametre'><li><FontAwesomeIcon icon={faCog} /> Paramètres</li></a>
                        <a href="DecouvrirClub"><li><FontAwesomeIcon icon={faPlusCircle} /> Découvrir les clubs</li></a>
                        <li><div className={styles.Overview}><FontAwesomeIcon icon={faRobot} /> Ajouter Robot</div></li>
                    </ul>
                </nav>
                <button className={styles.logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Se déconnecter</span>
                </button>
            </aside>
            <section className={styles.mainContent}>
                <div className={styles.robotInfo}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40e1809b73d27938f9c692f630aeda903ca122003a7b6914aa905b22cc4a5b63?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                        alt="Robot"
                        className={styles.robotImage}
                    />
                    <h1 className={styles.robotTitle}>Robot</h1>
                    <div className={styles.actionButtons}>
                        <button className={styles.actionButton}>Modifier</button>
                        <div className={styles.divider} aria-hidden="true"></div>
                        <button className={styles.actionButton}>Supprimer</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AccountsPage;
