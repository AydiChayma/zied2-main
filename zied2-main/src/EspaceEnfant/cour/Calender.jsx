import React from 'react';
import styles from './Calender.module.css';
import Sidebar from '../Sidebar';
import CardGrid from '../CardGrid';
import CourseSection from './CourseSection';
import RobotImage from '../RobotImage';

const Calendar = () => {
    return (
        <main className={styles.calendarPage}>
            <Sidebar />
            <section className={styles.mainContent}>
                <header className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Calendrier</h1>
                </header>
                <div className={styles.contentWrapper}>
                    <CardGrid />
                    <div className={styles.container}>
                        <CourseSection />
                        <RobotImage />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Calendar;