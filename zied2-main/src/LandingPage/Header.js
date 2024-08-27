import React from 'react';
import styles from './BodyStyle.module.css';
const Header = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.header}>
        <img alt='imaged'

          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/103b24a92e8826940e32adb4de99b6ca658cb96303a13b0738b71fe61b14b35e?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/103b24a92e8826940e32adb4de99b6ca658cb96303a13b0738b71fe61b14b35e?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/103b24a92e8826940e32adb4de99b6ca658cb96303a13b0738b71fe61b14b35e?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/103b24a92e8826940e32adb4de99b6ca658cb96303a13b0738b71fe61b14b35e?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/103b24a92e8826940e32adb4de99b6ca658cb96303a13b0738b71fe61b14b35e?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/103b24a92e8826940e32adb4de99b6ca658cb96303a13b0738b71fe61b14b35e?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/103b24a92e8826940e32adb4de99b6ca658cb96303a13b0738b71fe61b14b35e?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/103b24a92e8826940e32adb4de99b6ca658cb96303a13b0738b71fe61b14b35e?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527"
          className={styles.img}
        />
        <div className={styles.div}>
          <div className={styles.div2}>
            <div className={styles.home}>Acceuil</div>
            <div className={styles.aboutUs}>A propos</div>
            <div className={styles.ourClub}>Nos clubs</div>
            <div className={styles.gallery}>Gallerie</div>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.div3}>
            <img alt='imaged'

              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a03a8d33b728faab534788fce110bf2b8fbc23cf662fdeaec7eb988d5bc881e1?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527"
              className={styles.img2}
            />
            <img alt='imaged'

              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32501f0ed45354d1612582f01ee3935bf977444c88f80a40532b562bcb619e79?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527"
              className={styles.img3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
