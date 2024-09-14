import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomSelect.module.css';

const CustomSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const selectRef = useRef(null);
    const hiddenInputRef = useRef(null);

    const options = [
        { value: 'robotique', label: 'Club Robotique & Bricolage' },
        { value: 'aviation', label: 'Club AVIATION & Pilotage' },
        { value: 'algorithme', label: 'Logiciel de club - algorithme' },
        { value: 'debat', label: 'Club de débat' },
        { value: 'entrepreneur', label: 'Club des enfants entrepreneurs' },
        { value: 'multimedia', label: 'Club multimédia & création de contenu' },
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (value) => {
        setSelectedOptions(prevOptions => {
            const newOptions = prevOptions.includes(value)
                ? prevOptions.filter(option => option !== value)
                : [...prevOptions, value];
            hiddenInputRef.current.value = newOptions.join(', ');
            return newOptions;
        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className={styles.customSelect} ref={selectRef}>
            <div className={styles.selectSelected} onClick={toggleDropdown}>
                {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Sélectionnez une option'}
            </div>
            {isOpen && (
                <div className={styles.selectItems}>
                    {options.map(option => (
                        <div
                            key={option.value}
                            className={`${styles.selectItem} ${selectedOptions.includes(option.value) ? styles.sameAsSelected : ''}`}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
            <input type="hidden" name="choix" ref={hiddenInputRef} />
        </div>
    );
};

export default CustomSelect;
