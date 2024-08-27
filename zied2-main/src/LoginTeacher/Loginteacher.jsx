import React from "react";
import styles from './Loginteacher.module.css';
import SocialLoginButton from './SocialLoginButton';
import imageloginteacher from './Plan de travail 1 1.png'
const socialLoginButtons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d63e7923a38063e969e9070c06bbfc5b5e453eeacb1f26cbf2553a26c56a104?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b", alt: "Facebook login" },
];

function Loginteacher() {
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
                        </div>                        <form className={styles.formContainer}>
                            <p className={styles.welcomeText}>Content de te revoir !!!</p>
                            <h1 className={styles.loginTitle}>Se connecter</h1>
                            <label htmlFor="email" className={styles.inputLabel}>Email</label>
                            <input id="email" type="email" className={styles.inputField} placeholder="login@gmail.com" />
                            <div className={styles.passwordContainer}>
                                <label htmlFor="password" className={styles.passwordLabel}>Mot de passe</label>
                                <a href="#" className={styles.forgotPassword}>Mot de passe oublié ?</a>
                            </div>
                            <div className={styles.passwordField}>
                                <input id="password" type="password" placeholder="**************" />
                            </div>
                            <button type="submit" className={styles.loginButton}>
                                <span>SE CONNECTER</span>
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/341a431dc0c3386fbe612a883c480c68b40820449b2d2d831a927c6e1b3772de?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b" className={styles.loginIcon} alt="" />
                            </button>
                            <div className={styles.ou}>
                                <hr className={styles.horizontalLine} />
                                <p className={styles.alternativeLogin}>ou</p>
                                <hr className={styles.horizontalLine} />
                            </div>
                            <button className={styles.button}>
                                <div className={styles.buttonContent}>
                                    <div className={styles.iconWrapper}>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/faae240c32391bc94caca88fa3d665d94c6c1331c9f6ce9f6b3459231a79eba2?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                                            className={styles.iconBackground}
                                            alt=""
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d0310fed65b9eb3ee4a21a574feefe46385a72011c190957c88f25b162c2ce9?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                                            className={styles.googleIcon}
                                            alt="Google logo"
                                        />
                                    </div>
                                    <span className={styles.buttonText}>Continuer avec Google</span>
                                </div>
                            </button>
                            <div className={styles.signupPrompt}>
                                <p className={styles.signupText}>Vous n'avez pas encore de compte ?</p>
                                <a href="Signupteacher" className={styles.signupLink}>Inscrivez-vous gratuitement</a>
                            </div>
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

export default Loginteacher;