import React from "react";
import styles from './Footer.module.scss'

export const Footer = () => {
    return <footer className={styles.footer}>
        <div className={styles.container}>
            <a href='#' className={styles.privacy}>Политика конфиденциальности</a>
            <p>© 2023 Атмосфера Глэмпинг</p>
        </div>
    </footer>
}