import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faCalendarAlt, faCreditCard, faUserFriends, faFolder, faCog, faPlusCircle, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './DecouvrirClub.module.css';
import ClubCard from './ClubCard';
const clubsData = [
    {
        id: 1, name: 'Club Robotique & Bricolage', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8892bf2afa36b3de61c5ff75c2b252e77c21198cd2742265b20859e702a6e4ad?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b', price: 45,
        clubDetails: 'Le Club Robotique et DIY rassemble des passionnés pour créer et programmer des robots et des projets DIY.',
        ageRange: '6-18 Years'
    },
    {
        id: 2, name: 'Club AVIATION & Pilotage', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8c091e79494126e971de0e59f95307a55a713f713aa9fd3dfda068263e7ff4b7?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b', clubDetails: ' Le Club Aviation & Pilotage rassemble des passionnés pourexplorer et pratiquer le vol et laviation.',
        price: 50,
        ageRange: '12-18 Years'
    },
    {
        id: 3, name: 'Logiciel de club - algorithme', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3315e67048be3b99b58152939a7666790915d559fbcd687e5318df0bdfb3c1bb?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b',
        price: 45,
        clubDetails: ' Le Software - Algorithm Club explore les algorithmes et programmation.',
        ageRange: '6-18 Years'
    },
    {
        id: 4, name: 'Club de débat', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/87842db196e2caccad9e3ffdaf3639fd6bb7f33af916006ac1f8874605d0cc3b?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b',
        price: 45,
        clubDetails: 'Le Debate Club offre un espace pour discuter, argumenter et échanger des idées sur divers sujets.',
        ageRange: '6-18 Years'
    },
    {
        id: 5, name: 'Club des enfants entrepreneurs', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a18296bdc0024f20056017d4d4ff5c85e24d299ec716936515a4db1c98e9e7c5?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b',
        price: 45,
        clubDetails: ' Le Kidspreneur Club inspire les jeunes entrepreneurs à se développer leurs idées et créer des projets innovants.',
        ageRange: '6-18 Years'
    },
    {
        id: 6, name: 'Club multimédia & création de contenu', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/968c3ad89c6f3a1d986379ef2cfaaa51a8e99a02aba5fb43cd9f666259cbcc0f?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b',
        price: 45,
        clubDetails: '  Le Club Multimédia & Création de Contenu explore la vidéo, production de photos et de médias numériques.',
        ageRange: '6-18 Years'
    },
];


function DecouvrirClub() {
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
                        <a href="Paiment"><li><FontAwesomeIcon icon={faCreditCard} /> Paiements</li></a>
                        <a href="Cours"><li><FontAwesomeIcon icon={faFolder} /> Cours</li></a>
                        <a href="Parametre"><li><div className={styles.Parametre}><FontAwesomeIcon icon={faCog} /> Paramètres</div></li></a>
                        <li> <div className={styles.Decouvrir}><FontAwesomeIcon icon={faPlusCircle} /> Découvrir les clubs</div></li>
                        <a href='Robot'><li><FontAwesomeIcon icon={faRobot} /> Ajouter Robot</li></a>
                    </ul>
                </nav>
                <button className={styles.logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Se déconnecter</span>
                </button>
            </aside>
            <section className={styles.clubsSection}>
                <p className={styles.titre}>Découvrir nos clubs</p>
                <div className={styles.clubsGrid}>
                    {clubsData.map((club) => (
                        <ClubCard
                            key={club.id}
                            id={club.id}
                            imageSrc={club.image}
                            clubName={club.name}
                            price={club.price}
                            clubDetails={club.clubDetails}
                            ageRange={club.ageRange}
                        />
                    ))}

                </div>

            </section>
        </div>
    );
}

export default DecouvrirClub;