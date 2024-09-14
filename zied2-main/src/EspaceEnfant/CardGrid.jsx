import React from 'react';
import styles from './CardGrid.module.css';

const CardGrid = () => {
    const cards = [
        { title: 'Mobile Development', color: '#4aa3df' },
        { title: 'Robot Development', color: '#ff66b2' },
        { title: 'Figma UI/UX Designs', color: '#5ad78f' },
        { title: 'Figma UI/UX Designs', color: '#fbc372' },
    ];

    return (
        <div className={styles.cardGrid}>
            {cards.map((card, index) => (
                <div key={index} className={styles.card} style={{ backgroundColor: card.color }}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <div className={styles.cardInfo}>
                        <span className={styles.taskCount}>10 Task</span>
                        <span className={styles.separator}></span>
                        <span className={styles.percentage}>84%</span>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '84%' }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardGrid;