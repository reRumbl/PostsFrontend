// components/Loading/Loading.tsx
import React from 'react';
import styles from './Loading.module.css';


interface LoadingProps {
    text?: string;
}


const Loading: React.FC<LoadingProps> = ({ text = '' }) => {
    return (
        <div className={styles.container}>
            <div className={styles.spinner} />
            <p className={styles.text}>{text}</p>
        </div>
    );
};


export default Loading;