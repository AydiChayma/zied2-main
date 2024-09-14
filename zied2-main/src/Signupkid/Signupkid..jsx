import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faCalendarAlt, faCreditCard, faUserFriends, faFolder, faCog, faPlusCircle, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Component from './Component 2.png'
import styles from './Signupkid.module.css';
function Signupkid() {
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
                        <a href='Parametre'><li><FontAwesomeIcon icon={faCog} /> Paramètres</li></a>
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
                <h1 className={styles.loginTitle}>Enfant</h1>
                <form className={styles.formContainer} >
                    <label htmlFor="nom" className={styles.inputLabel}>Nom Complet<span style={{ color: 'red', fontSize: '15px' }}>*</span></label>
                    <input id="nom" type="text" className={styles.inputField} placeholder="Entrer votre nom complet" />
                    <label htmlFor="date" className={styles.inputLabel}>Date de naissance</label>
                    <input id="date" type="Date" className={styles.inputField} />
                    <label htmlFor="prenom" className={styles.inputLabel}>Genre<span style={{ color: 'red', fontSize: '15px' }}>*</span></label>
                    <div class={styles.genderselection}>
                        <input type="radio" id="masculino" name="gender" value="masculino" />
                        <label for="masculino">Masculino</label>
                        <input type="radio" id="femenino" name="gender" value="femenino" />
                        <label for="femenino">Femenino</label>
                    </div>
                    <label for="options" className={styles.inputLabel}>Choisissez une langue<span style={{ color: 'red', fontSize: '15px' }}>*</span></label>
                    <select id="options" class={styles.styledselect}>
                        <option value="option1">Français</option>
                        <option value="option2">Anglais</option>
                        <option value="option3">Arabe</option>
                        <option value="option4">Turc</option>
                    </select>
                    <label htmlFor="email" className={styles.inputLabel}>Niveau scolaire<span style={{ color: 'red', fontSize: '15px' }}>*</span></label>
                    <input id="email" type="email" className={styles.inputField} placeholder="Niveau scolaire de votre enfant" />
                    <Link to="/CalenderChild">
                        <button type="submit" className={styles.loginButton}>
                            <span>Terminer</span>
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/341a431dc0c3386fbe612a883c480c68b40820449b2d2d831a927c6e1b3772de?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b" className={styles.loginIcon} alt="" />
                        </button>
                    </Link>
                </form>
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

export default Signupkid;
