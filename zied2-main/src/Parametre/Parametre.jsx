import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faCalendarAlt, faCreditCard, faUserFriends, faFolder, faCog, faPlusCircle, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Parametre.module.css';
import Component from './Component 5 (1).png'
import Component1 from './Component 5 (2).png'
import Component2 from './Component 6 (1).png'
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
                        <a href="AccountsPage"><li> <div className={styles.Overview}><FontAwesomeIcon icon={faThLarge} /> Aperçu</div></li></a>
                        <a href="Schedual"><li><FontAwesomeIcon icon={faCalendarAlt} /> Calendrier</li></a>
                        <a href="Paiment"><li><FontAwesomeIcon icon={faCreditCard} /> Paiements</li></a>
                        <a href="Cours"><li><FontAwesomeIcon icon={faFolder} /> Cours</li></a>
                        <li><div className={styles.Parametre}><FontAwesomeIcon icon={faCog} /> Paramètres</div></li>
                        <a href='DecouvrirClub'><li><FontAwesomeIcon icon={faPlusCircle} /> Découvrir les clubs</li></a>
                        <a href='Robot'><li><FontAwesomeIcon icon={faRobot} /> Ajouter Robot</li></a>
                    </ul>
                </nav>
                <button className={styles.logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Se déconnecter</span>
                </button>
            </aside>
            <main className={styles.mainContent}>
                <div className={styles.profile}>
                    <img src={Component} alt="Profile" className={styles.image1} />
                    <img src={Component1} alt="Profile" className={styles.image2} />
                    <p>Irfan Ahsan</p>
                </div>
                <div className={styles.formulaire}>
                    <label >Ancien mot de passe</label><br />
                    <input type="text" className={styles.text} /><br />
                    <label >Nouveau mot de passe</label><br />
                    <input type="text" className={styles.text} /><br />
                    <label >Confirmer votre nouveau mot de passe</label><br />
                    <input type="text" className={styles.text} /><br />
                    <button className={styles.bouton1}>Terminer</button>
                </div>
            </main>
            <aside className={styles.profileSidebar}>
                <img src={Component2} alt="Profile" className={styles.image3} />
                <h1>Bienvenu</h1>
            </aside>
        </div>
    );
}

export default AccountsPage;
