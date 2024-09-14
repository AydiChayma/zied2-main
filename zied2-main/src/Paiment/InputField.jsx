// InputField.js
import React, { useState } from 'react';
import styles from './PaimentForm.module.css';

const InputField = ({ label, placeholder, value, onChange, children }) => {
    return (
        <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>{label}</label>
            <div className={styles.inputField}>
                <input
                    className={styles.inputContent}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {children}
            </div>
        </div>
    );
};

export default InputField;
