import React from "react";
import styles from './WhoAreYou.module.css';
import NavLink from './NavLink';
import SocialIcon from './SocialIcon';
import Option from './Option';
import headimg from './Group 1.png'
const navItems = ['Acceuil', 'A propos', 'Nos clubs', 'Gallerie', 'Contact'];
const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5528ccaf9b2edf446ab60a2b9c05e691286d8b8afdb1c36622f795182e664d6c?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b", alt: "Social icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bf4be93f19a2001621a2355c4a94a4a71d49b4b43bf937814f026f6467ec605?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b", alt: "Social icon 2" }
];
const options1 = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9b46e4510a6f5dc8fb9dcd0f78831c239bcde29f2a9f7a05d6b532a29a66c9?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b", buttonText: "Professeur", buttonType: "OptionButtonTeacher", buttonStyle: styles.teacherButtonStyle, navigateTo: "/Loginteacher" },
];
const options = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/81945ab0b8644262bea0ac5ec8ddae047c77def70c8b77e2a17cff5eadcbf290?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b", buttonText: "Parent", buttonType: "OptionButtonParent", buttonStyle: styles.parentButtonStyle, navigateTo: "/Loginparent" }
];

function WhoAreYou() {
    return (
        <section className={styles.container}>
            <div className={styles.mainContent}>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b3553453b14206a2735c167f1fc57615e68066bea3e66f2126b4b751ece53ad?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="" className={styles.backgroundImage} />
                <header className={styles.header}>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/73867cab63437c48df0f71fa6d7bd8050ff2a302aef007bf132fed439d456c74?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="Logo" className={styles.logo} />
                    <div className={styles.navContainer}>
                        <nav className={styles.navLinks}>
                            {navItems.map((item, index) => (
                                <NavLink key={index}>{item}</NavLink>
                            ))}
                        </nav>
                        <div className={styles.socialIcons}>
                            {socialIcons.map((icon, index) => (
                                <SocialIcon key={index} src={icon.src} alt={icon.alt} />
                            ))}
                        </div>
                    </div>
                </header>
                <img src={headimg} alt="" className={styles.headimg} />
                <h1 className={styles.title}>Êtes-vous parent ou enseignant?</h1>
                <div className={styles.optionsContainer}>
                    <div className={styles.optionsWrapper}>
                        {options1.map((option, index) => (
                            <div key={index} className={styles.optionColumn1}>
                                <a href="/Loginteacher"> <Option imageSrc={option.imageSrc} buttonText={option.buttonText} buttonType={option.buttonType} buttonStyle={option.buttonStyle} navigateTo={option.navigateTo} />
                                </a>
                            </div>
                        ))}
                        {options.map((option, index) => (
                            <div key={index} className={styles.optionColumn}>
                                <a href="/Loginparent"><Option imageSrc={option.imageSrc} buttonText={option.buttonText} buttonType={option.buttonType} buttonStyle={option.buttonStyle} navigateTo={option.navigateTo} />
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhoAreYou;