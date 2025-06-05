import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/client';
import styles from './VerifyPage.module.css'


const VerifyPage: React.FC = () => {
    const token = useParams().token;

    useEffect(() => {
        const verifyAction = async () => {
            try {
                if (token) {
                    await api.patch(`/auth/verify/${token}`);
                    setTimeout(() => {window.location.href = '/'}, 5000);
                }
            } catch {
                alert('Verify error')
            }
        }
        verifyAction();
    }, [token])
    
    if (!token) {
        return (
            <div className={styles.container}>
                <div className={styles.message_box}>
                    <h2 className={styles.message}>We send verification email on your email address</h2>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.message_box}>
                <h2 className={styles.message}>Email successfully verified</h2>
                <p className={styles.info}>You will be redirected just in moment</p>
            </div>
        </div>
    )
}


export default VerifyPage;
