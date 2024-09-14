import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faCalendarAlt, faCreditCard, faUserFriends, faFolder, faCog, faPlusCircle, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Paiment.module.css';
import CustomSelect from './CustomSelect';
function Paiment() {
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
                        <a href="AccountsPage"><li><FontAwesomeIcon icon={faThLarge} /> Aperçu</li></a>
                        <a href="Schedual"><li><FontAwesomeIcon icon={faCalendarAlt} /> Calendrier</li></a>
                        <li> <div className={styles.Paiment}><FontAwesomeIcon icon={faCreditCard} /> Paiements</div></li>
                        <a href="Cours"><li><FontAwesomeIcon icon={faFolder} /> Cours</li></a>
                        <a href='Parametre'><li><FontAwesomeIcon icon={faCog} /> Paramètres</li></a>
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

                <div className={styles.formulaire}>
                    <p className={styles.titre}>Completer</p>
                    <label className={styles.inputLabel}>Nom du club</label><br />
                    <CustomSelect /><br />
                    <label className={styles.inputLabel}>Nom d'enfant</label><br />
                    <div class={styles.childselection}>
                        <input type="radio" id="masculino" name="child" value="Ali" />
                        <label for="masculino">Ali</label>
                        <input type="radio" id="femenino" name="child" value="Nada" />
                        <label for="femenino">Nada</label>
                    </div>
                    <label className={styles.inputLabel} >Mois de début</label><br />
                    <input type="Date" className={styles.inputField} /><br />
                    <label className={styles.inputLabel}>Mois de fin</label><br />
                    <input type="Date" className={styles.inputField} /><br />
                    <a href='Formulaire'> <button className={styles.Button}>Continuer</button></a>
                </div>
                <div className={styles.facture}>
                    <p className={styles.titre2}>Facture</p><br />
                    <div className={styles.container2}>
                        <div className={styles.phrase}><p>Robot </p><p className={styles.phrase2}>51.38TND</p></div>
                        <div className={styles.phrase}><p>Promotion </p><p className={styles.phrase2}>0%</p></div>
                        <div className={styles.phrase}><p>Nombre d'enfant </p><p className={styles.phrase2}>2</p></div>
                    </div>
                    <div className={styles.container3}>
                        <div className={styles.phrase3}><p>Total </p><p className={styles.phrase2}>51.38TND</p></div>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default Paiment;
