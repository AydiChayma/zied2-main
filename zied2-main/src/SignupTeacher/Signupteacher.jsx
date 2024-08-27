import React from "react";
import styles from './Signupteacher.module.css';
import imageloginteacher from './Plan de travail 1 1.png'
const socialLoginButtons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d63e7923a38063e969e9070c06bbfc5b5e453eeacb1f26cbf2553a26c56a104?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b", alt: "Facebook login" },
];

function Signupteacher() {
    return (
        <main className={styles.loginContainer}>
            <section className={styles.loginContent}>
                <div className={styles.loginCard}>
                    <div className={styles.logoContainer}>
                        <div className={styles.head1}>
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/73867cab63437c48df0f71fa6d7bd8050ff2a302aef007bf132fed439d456c74?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b" className={styles.logo} alt="Company logo" />
                            <button className={styles.maisonButton}>
                                <span className={styles.icon}><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5563369ab61a09a488fe759e5e5e2becaf093a9779c631ba570c0e8c305188d?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="" /></span>
                                <a href="/"><span className={styles.text}>maison</span></a>
                            </button>
                        </div>
                        <form className={styles.formContainer}>
                            <h1 className={styles.loginTitle}>Professeur(e)</h1>
                            <label htmlFor="nom" className={styles.inputLabel}>Nom complet<span style={{ color: 'red', fontSize: '15px' }}>*</span></label>
                            <input id="nom" type="text" className={styles.inputField} placeholder="Entrer votre nom complet" />
                            <label htmlFor="prenom" className={styles.inputLabel}>Spécialités ou matières d'enseignement<span style={{ color: 'red', fontSize: '15px' }}>*</span></label>
                            <input id="prenom" type="prenom" className={styles.inputField} />
                            <label htmlFor="date" className={styles.inputLabel}>Nom De L'établissement<span style={{ color: 'red', fontSize: '15px' }}>*</span></label>
                            <input id="date" type="text" className={styles.inputField} />
                            <label htmlFor="num" className={styles.inputLabel}>Numéro Téléphone<span style={{ color: 'red', fontSize: '15px' }}>*</span></label>
                            <input id="num" type="number" className={styles.inputField} placeholder="Entrer votre numéro" />
                            <label htmlFor="email" className={styles.inputLabel}>Email<span style={{ color: 'red', fontSize: '15px' }}>*</span></label>
                            <input id="email" type="email" className={styles.inputField} placeholder="login@gmail.com" />
                            <button type="submit" className={styles.loginButton}>
                                <span>Terminer</span>
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/341a431dc0c3386fbe612a883c480c68b40820449b2d2d831a927c6e1b3772de?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b" className={styles.loginIcon} alt="" />
                            </button>
                        </form>
                    </div>
                    <div className={styles.imageContainer}>
                        <img loading="lazy" src={imageloginteacher} className={styles.heroImage} alt="Login hero " />

                    </div>
                </div>
            </section>
        </main>
    );
}

export default Signupteacher;