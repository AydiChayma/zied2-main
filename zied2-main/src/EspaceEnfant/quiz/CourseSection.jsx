import React from 'react';
import styles from './CourseSection.module.css';
import component from './Component 12.png'
import { Link } from 'react-router-dom';

const CourseSection = () => {
    return (
        <section className={styles.courseSection}>
            <img src={component} className={styles.image1} />
            <Link to="/CalenderChild">
                <button className={styles.tabButton1}>club</button>
            </Link>
            <button className={styles.tabButton2}>Quiz</button>
            <Link to="/cour">
                <button className={styles.tabButton3}>cour</button>
            </Link>
            <button className={styles.startButton}>Commence</button>
        </section>
    );
};

export default CourseSection;