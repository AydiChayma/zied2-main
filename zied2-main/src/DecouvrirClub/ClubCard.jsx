import React from 'react';
import styles from './ClubCard.module.css';
import { useNavigate } from 'react-router-dom';

const ClubCard = ({ id, imageSrc, clubName, clubDetails, price, ageRange }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/club/${id}`);  // Naviguer vers la page spécifique du club
    };
    return (
        <article className={styles.clubCard} onClick={handleClick}>
            <img src={imageSrc} alt={`${clubName} club icon`} className={styles.clubImage} />
            <h3 className={styles.clubName}>{clubName}</h3>
            <div className={styles.clubDetails}>
                <div>
                    <h3 className={styles.price}>{price}DT</h3>
                    <p className={styles.description}>{clubDetails}</p>
                    <p className={styles.ageLabel}>Age:</p>
                    <p className={styles.ageRange}>{ageRange}</p>
                </div>
            </div>
        </article>
    );
};

export default ClubCard;
