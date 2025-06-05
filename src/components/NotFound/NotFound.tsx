import React from 'react';
import styles from './NotFound.module.css';


const NotFound: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.text}>Page Not Found</p>
            <a href='/' className={styles.link}>Return to Home</a>
        </div>
    );
};


export default NotFound;
