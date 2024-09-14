import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faCalendarAlt, faCreditCard, faUserFriends, faFolder, faCog, faPlusCircle, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './AddRobot.module.css';
import component from './Component 10.png';
import { useNavigate } from 'react-router-dom';

function AccountsPage() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedRobot, setSelectedRobot] = useState('');
    const [code, setCode] = useState(''); // Add a state for input code
    const [errorMessage, setErrorMessage] = useState(''); // State for the error message
    const navigate = useNavigate(); // Initialize the navigation function

    const openModal = (robotName) => {
        setSelectedRobot(robotName);
        setModalOpen(true);
        setErrorMessage(''); // Clear the error message when modal is opened
    };

    const closeModal = () => {
        setSelectedRobot('');
        setModalOpen(false);
    };

    const handleOkClick = () => {
        if (code === 'yourExpectedCode') { // Replace 'yourExpectedCode' with the actual expected code
            navigate('/RobotList'); // Navigate to a specific route/page
            closeModal(); // Close the modal on success
        } else {
            setErrorMessage('Code incorrect'); // Set the error message
        }
    };

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccbe73435245c28562767d3699b007136d11b2bcddbc8b19af72425ec1a65406?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                        alt="Logo"
                        className={styles.logo}
                    />
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <a href='AccountsPage'> <li><FontAwesomeIcon icon={faThLarge} /> Aperçu</li></a>
                        <a href="Schedual"><li><FontAwesomeIcon icon={faCalendarAlt} /> Calendrier</li></a>
                        <a href="Paiment"><li><FontAwesomeIcon icon={faCreditCard} /> Paiements</li></a>
                        <a href="Cours"><li><FontAwesomeIcon icon={faFolder} /> Cours</li></a>
                        <a href='Parametre'><li><FontAwesomeIcon icon={faCog} /> Paramètres</li></a>
                        <a href="DecouvrirClub"><li><FontAwesomeIcon icon={faPlusCircle} /> Découvrir les clubs</li></a>
                        <li><div className={styles.Overview}><FontAwesomeIcon icon={faRobot} /> Ajouter Robot</div></li>
                    </ul>
                </nav>
                <button className={styles.logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Se déconnecter</span>
                </button>
            </aside>
            <div className={styles.code}>
                <main className={styles.mainContent}>
                    <img src={component} className={styles.image1} />

                    <section className={styles.essential}>
                        {/* Robot Card 1 */}
                        <div className={styles.card} onClick={() => openModal('Robot 1')}>
                            <div className={styles.cardContent}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfee35e02b2490dd2c307ff5e599481a67be0c03c080a09e693aefa7f93d568d?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                                        className={styles.logo2}
                                        alt="Essential logo"
                                    />
                                </div>
                                <div className={styles.textWrapper}>
                                    <div className={styles.textContent}>
                                        <h2 className={styles.title}>Essential</h2>
                                        <p className={styles.subtitle}>3-6 year</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Robot Card 2 */}
                        <div className={styles.card} onClick={() => openModal('Robot 2')}>
                            <div className={styles.cardContent}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8524feb79591360a1087856c662a3f25329ac3776702c6464ac4bf203cea861?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                                        className={styles.logo2}
                                        alt="Essential logo"
                                    />
                                </div>
                                <div className={styles.textWrapper}>
                                    <div className={styles.textContent}>
                                        <h2 className={styles.title}>Essential</h2>
                                        <p className={styles.subtitle}>3-6 year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.essential}>
                        {/* Robot Card 3 */}
                        <div className={styles.card} onClick={() => openModal('Robot 3')}>
                            <div className={styles.cardContent}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/98b63c2844180466b75d7d7c0f1801fe68f5610150bdd49c7f7ad1232d828b6a?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                                        className={styles.logo2}
                                        alt="Essential logo"
                                    />
                                </div>
                                <div className={styles.textWrapper}>
                                    <div className={styles.textContent}>
                                        <h2 className={styles.title}>Essential</h2>
                                        <p className={styles.subtitle}>3-6 year</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Robot Card 4 */}
                        <div className={styles.card} onClick={() => openModal('Robot 4')}>
                            <div className={styles.cardContent}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/18c21797813bda2cf7c3204ed7d4a1ca509627b707bb639d571444385364f85d?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                                        className={styles.logo2}
                                        alt="Essential logo"
                                    />
                                </div>
                                <div className={styles.textWrapper}>
                                    <div className={styles.textContent}>
                                        <h2 className={styles.title}>Essential</h2>
                                        <p className={styles.subtitle}>3-6 year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {isModalOpen && (
                        <div className={styles.modalOverlay}>
                            <div className={styles.modal}>
                                <button className={styles.closeButton} onClick={closeModal}>✖</button>
                                <p>Entrer le code pour {selectedRobot}</p>
                                <input
                                    type="text"
                                    className={styles.codeInput}
                                    placeholder="Entrer le code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)} // Update code input
                                />
                                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                                <button className={styles.okButton} onClick={handleOkClick}>ok</button>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default AccountsPage;
