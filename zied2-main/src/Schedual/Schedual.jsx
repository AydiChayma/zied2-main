import React from 'react';
import styles from './Schedual.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faCalendarAlt, faCreditCard, faUserFriends, faFolder, faCog, faPlusCircle, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
function Dashboard() {
    return (
        <div className={styles.dashboard}>
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
                        <li ><div className={styles.schedule}><FontAwesomeIcon icon={faCalendarAlt} /> Calendrier</div></li>
                        <a href="Paiment"><li><FontAwesomeIcon icon={faCreditCard} /> Paiements</li></a>
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
            <main className={styles['main-content']}>
                <header>
                    <div className={styles.head1}>
                        <h1>Bonjour Ahsan</h1>
                        <p>Aujourd'hui, nous sommes le lundi 07 avril 2023</p>
                    </div>
                </header>
                <section className={styles.cards}>
                    <div className={styles.card0}>
                        <h3>Développement mobile</h3>
                        <p>10 Tâche | 84%</p>
                    </div>
                    <div className={styles.card1}>
                        <h3>Développement de robots</h3>
                        <p>10 Tâche | 84%</p>
                    </div>
                    <div className={styles.card2}>
                        <h3>Conceptions Figma UI/UX</h3>
                        <p>10 Tâche | 94%</p>
                    </div>
                </section>
                <section className={styles.tasks}>
                    <h2>Tâches pour aujourd'hui</h2>
                    <div className={styles.div1}>
                        <ul>
                            <li>
                                <input type="checkbox" className={styles.checkbox} />
                                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '18px', color: '#6A6464' }}>Application mobile</span> <br />
                                <span className={styles.phrase} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#6A6464' }}>Préparer le fichier Figma</span>
                            </li>
                            <li>
                                <input type="checkbox" className={styles.checkbox} />
                                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '18px', color: '#6A6464' }}>Application mobile</span> <br />
                                <span className={styles.phrase} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#6A6464' }}>Préparer le fichier Figma</span>
                            </li>
                            <li>
                                <input type="checkbox" className={styles.checkbox} />
                                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '18px', color: '#6A6464' }}>Application mobile</span> <br />
                                <span className={styles.phrase} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#6A6464' }}>Préparer le fichier Figma</span>
                            </li>
                        </ul>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/265e205464e3b0ab1b88efd0236361e1b924f4753081341754595c2fd5a9aa91?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                            className={styles.image}
                            alt="Description of the image"
                        />
                    </div>
                </section>
            </main>
            <aside className={styles.calendar}>
                <section className={styles.header1}>
                    <h3 className={styles.calendarTitle}>Calendrier</h3>

                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/17f039c5dff6793426ededb00574433020c12cccdefa0e0a713f2b1058af7bc3?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                        alt="User profile" className={styles.profileImage}
                    />
                </section>
                <ul className={styles.calendarList}>
                    <li className={styles.calendarItem}>
                        <span className={styles.date}>7 Apr 2022</span>
                        <div className={styles.event}>
                            <span className={styles.time}>10:00</span>
                            <span className={`${styles.taskType} ${styles.blue}`}>logo design</span>
                        </div>
                        <div className={styles.event}>
                            <span className={styles.time}>12:00</span>
                            <span className={`${styles.taskType} ${styles.orange}`}>logo design</span>
                        </div>
                    </li>
                    <li className={styles.calendarItem}>
                        <span className={styles.date}>8 Apr 2022</span>
                        <div className={styles.event}>
                            <span className={styles.time}>1:05</span>
                            <span className={`${styles.taskType} ${styles.blue}`}>logo design</span>
                        </div>
                        <div className={styles.event}>
                            <span className={styles.time}>7:00</span>
                            <span className={`${styles.taskType} ${styles.orange}`}>logo design</span>
                        </div>
                    </li>
                </ul>
            </aside>


        </div>
    );
}

export default Dashboard;
