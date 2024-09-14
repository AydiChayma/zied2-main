import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import styles from './PaimentForm.module.css';

const PaimentForm = () => {
    // L'état pour le bouton actif
    const [activeButton, setActiveButton] = useState('card');

    // Fonction pour gérer le clic sur un bouton
    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <div className={styles.paymentForm}>
            <div className={styles.paymentMethods}>
                <button className={`${styles.paymentMethod} ${activeButton === 'card' ? styles.active : ''}`}
                    onClick={() => handleClick('card')}> <FontAwesomeIcon icon={faCreditCard} />Card</button>
                <button className={`${styles.paymentMethod} ${activeButton === 'eps' ? styles.active : ''}`}
                    onClick={() => handleClick('eps')}>  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/80b86dbafc8da993143b8047efc61108f85c39255839bd99767c3a1cc6c6ab1c?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="EPS" />EPS</button>
                <button className={`${styles.paymentMethod} ${activeButton === 'giropay' ? styles.active : ''}`}
                    onClick={() => handleClick('giropay')}> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/69646a9186d79dc5dd207dc7eb5732e324c14dd7efd65db2caa454528bfac7a6?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="Giropay" />Giropay</button>
                <button className={`${styles.paymentMethod} ${activeButton === 'more' ? styles.active : ''}`}
                    onClick={() => handleClick('more')}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </button>
            </div>
            <div className={styles.cardInput}>
                <input type="text" placeholder="Card number" className={styles.inputField1} />
                <div className={styles.cardIcons}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6adb3deafca11711c3536a634d948bcca105894318d753ac2ecded24613cedb?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="Visa" />
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8dfcb0fd869b35036860c032a36d29561ffa6c17cf6c23a794895ef99738b9d?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="MasterCard" />
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d67337d183d3ecefff29b0d550614c0193d1a2cdae1994d7e95436dee6c96266?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="Amex" />
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/66a6ac738b9b8180c53e3139ad49c1a03ac68e4c51ad7f15330ea2aa42a2f7e5?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" alt="Amex" />

                </div>
            </div>
            <div className={styles.row}>
                <input type="text" placeholder="MM / YY" className={`${styles.inputField} ${styles.halfWidth}`} />
                <input type="text" placeholder="CVC" className={`${styles.inputField} ${styles.halfWidth}`} />
            </div>
            <div className={styles.row}>
                <select className={`${styles.inputField} ${styles.halfWidth}`}>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Tunisia</option>
                    <option>Turc</option>
                    {/* Add more options as needed */}
                </select>
                <input type="text" placeholder="Postal code" className={`${styles.inputField} ${styles.halfWidth}`} />
            </div>
            <div className={styles.container}>
                <button className={styles.totalBtn}>
                    <span className={styles.totalLabel}>Total</span>
                    <span className={styles.totalAmount}>102.76 TND</span>
                </button>
                <button className={styles.confirmBtn}>Confirm Payment</button>
            </div>
        </div>
    );
};

export default PaimentForm;
