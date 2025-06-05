import React, { useState } from 'react';
import api from '../../api/client';
import Form, { FormGroup, SubmitBtn } from '../../components/Form/Form';
import styles from './LoginPage.module.css';


const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', { 
                email: email, 
                password: password 
            });
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            window.location.href = '/';
        } catch {
            alert('Login Error');
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.page_title}>Login</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label className={styles.form_label}>Email</label>
                    <input
                        type='email'
                        placeholder='Email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <label className={styles.form_label}>Password</label>
                    <input
                        type='password'
                        placeholder='Password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>

                <SubmitBtn>Login</SubmitBtn>
                
                <p className={styles.link_text}>
                    Don't have an account?
                    <a className={styles.link} href='/register'> Register</a>
                </p>
            </Form>
        </div>
    )
}


export default LoginPage;
