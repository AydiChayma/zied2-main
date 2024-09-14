import React from 'react';
import styles from './CourseSection.module.css';
import component11 from './Component 11.png';
import { Link } from 'react-router-dom';

const CourseSection = () => {
    return (
        <section className={styles.courseSection}>
            <img src={component11} alt="Robot image" className={styles.image1} />
            <button className={styles.tabButton1}>club</button>
            <Link to="/quiz">
                <button className={styles.tabButton2}>Quiz</button>

            </Link>
            <Link to="/cour">
                <button className={styles.tabButton3}>cour</button>
            </Link>
            <button className={styles.startButton}>Commence</button>
        </section>
    );
};

export default CourseSection;