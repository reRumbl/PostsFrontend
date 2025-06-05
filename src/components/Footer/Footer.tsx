import React from 'react';
import styles from './Footer.module.css';


const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <p>&copy; {new Date().getFullYear()} Posts. All rights reserved.</p>
                <div className={styles.footer_links}>
                    <a href='/privacy' className={styles.footer_link}>Privacy Policy</a>
                    <a href='/terms' className={styles.footer_link}>Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}


export default Footer;
