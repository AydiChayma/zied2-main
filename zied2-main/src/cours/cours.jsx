import React from 'react';
import styles from './cours.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faCalendarAlt, faCreditCard, faUserFriends, faFolder, faCog, faPlusCircle, faRobot, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const CourseCard = ({ imageUrl, studentCount, date, title, description }) => {
    return (
        <article className={styles.card}>
            <img src={imageUrl} alt="Course cover" className={styles.courseImage} />
            <div className={styles.cardContent}>
                <div className={styles.studentInfo}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7752ba0756b84c6d62921a526204924bf07e65dedc0b9a8a7434422eaebbe470?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="Student Icon" className={styles.studentIcon} />
                    <span aria-hidden="true">+</span>
                    <div className={styles.studentCount}>
                        <span>{studentCount}</span>
                        <span className={styles.studentLabel}>students</span>
                    </div>
                </div>
                <time className={styles.courseDate}>{date}</time>
                <h2 className={styles.courseTitle}>{title}</h2>
                <p className={styles.courseDescription}>{description}</p>
                <div className={styles.enrollContainer}>
                    <button className={styles.enrollButton}>Inscrivez-vous</button>
                </div>
            </div>
        </article>

    );
};

const CourseCardWrapper = ({ courseData }) => {
    return <CourseCard {...courseData} />;
};

function Cours() {
    const courseData1 = {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/de57b0d404f4d10014c6e8309925a9a5944d4c05e2c1982801d600961a76bb4d?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b",
        studentCount: 11,
        date: "1 - 28 July 2022",
        title: "Certificat professionnel BM en science des données",
        description: "Masterclass de gestion de produits, vous apprendrez avec Sarah Johnson - Responsable de la plateforme client produit Gojek Indonésie."
    };
    const courseData2 = {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8320d03506283df39c8f4086dbd559ef125949f8c59bebadf19d937bff58ad99?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b",
        studentCount: 40,
        date: "1 - 15 July 2022",
        title: "Gestion des produits de base - Cours",
        description: "Masterclass de gestion de produits, vous apprendrez avec Sarah Johnson - Responsable de la plateforme client produit Gojek Indonésie."
    };

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
                        <a href="Schedual"><li><FontAwesomeIcon icon={faCalendarAlt} /> Calendrier</li></a>
                        <a href="Paiment"><li><FontAwesomeIcon icon={faCreditCard} /> Paiements</li></a>
                        <li><div className={styles.schedule}><FontAwesomeIcon icon={faFolder} /> Cours</div></li>
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
                <CourseCardWrapper courseData={courseData1} />
                <CourseCardWrapper courseData={courseData2} />
            </main>
            <aside className={styles.cours}>
                <section className={styles.header1}>
                    <h3 className={styles.CoursTitle}>Cours populaires</h3>
                </section>
                <div className={styles.boutoncours}>
                    <button className={styles.button1}>
                        Tous les cours
                    </button>
                    <button className={styles.button}>
                        Algorithme
                    </button>
                    <button className={styles.button}>
                        Robotics
                    </button>
                </div>
            </aside>
        </div>
    );
}

export default Cours;
