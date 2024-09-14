import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faCalendarAlt, faCreditCard, faFolder, faCog, faPlusCircle, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';  // <-- Utiliser Link pour la navigation côté client
import styles from './Video.module.css';
import { useParams } from 'react-router-dom';
import component9 from './Component 9.png';

const clubsData = [
    { id: 1, name: 'Club Robotique & Bricolage', videoUrl: 'https://www.youtube.com/embed/kwlMM8dSsgo' },
    { id: 2, name: 'Club AVIATION & Pilotage', videoUrl: 'https://www.youtube.com/embed/videoId2' },
    { id: 3, name: 'Logiciel de club - algorithme', videoUrl: 'https://www.youtube.com/embed/videoId3' },
    { id: 4, name: 'Club de débat', videoUrl: 'https://www.youtube.com/embed/videoId4' },
    { id: 5, name: 'Club des enfants entrepreneurs', videoUrl: 'https://www.youtube.com/embed/videoId5' },
    { id: 6, name: 'Club multimédia & création de contenu', videoUrl: 'https://www.youtube.com/embed/videoId6' },
];

function Video() {
    const { id } = useParams(); // Récupérer l'ID du club depuis l'URL
    const club = clubsData.find((club) => club.id === parseInt(id));

    if (!club) {
        return <h2>Club non trouvé</h2>; // Afficher un message si le club n'existe pas
    }

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
                        <li><Link to="/AccountsPage"><FontAwesomeIcon icon={faThLarge} /> Aperçu</Link></li>
                        <li><Link to="/Schedual"><FontAwesomeIcon icon={faCalendarAlt} /> Calendrier</Link></li>
                        <li><Link to="/Paiment"><FontAwesomeIcon icon={faCreditCard} /> Paiements</Link></li>
                        <li><Link to="/Cours"><FontAwesomeIcon icon={faFolder} /> Cours</Link></li>
                        <li><Link to="/Parametre"><FontAwesomeIcon icon={faCog} /> Paramètres</Link></li>
                        <li><Link to="/DecouvrirClub"><FontAwesomeIcon icon={faPlusCircle} /> Découvrir les clubs</Link></li>
                        <li><Link to={`/club/${id}`}><FontAwesomeIcon icon={faRobot} /> Club Robotique</Link></li>  {/* <-- Exemple de lien direct vers le club */}
                    </ul>
                </nav>
                <button className={styles.logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Se déconnecter</span>
                </button>
            </aside>
            <section className={styles.clubsSection}>
                <img src={component9} className={styles.image9} alt="Club" />
                <div>
                    <h1>{club.name}</h1>
                    <iframe
                        width="560"
                        height="315"
                        src={club.videoUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={club.name}
                    ></iframe>
                </div>
            </section>
        </div>
    );
}

export default Video;
