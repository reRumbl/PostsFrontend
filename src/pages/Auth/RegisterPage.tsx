import React, { useState } from 'react';
import api from '../../api/client';
import Form, { FormGroup, SubmitBtn } from '../../components/Form/Form';
import styles from './RegisterPage.module.css';


const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (password === confirmPassword) {
                const response = await api.post('/auth/register', { 
                    email: email, 
                    username: username,
                    password: password,
                    confirm_password: confirmPassword,
                });
                localStorage.setItem('access_token', response.data.access_token);
                window.location.href = '/';
            } else {
                alert('Passwords did not match')
            }
        } catch {
            alert('Login Error');
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.page_title}>Register</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label className={styles.form_label}>Email</label>
                    <input
                        className={styles.form_field}
                        type='email'
                        placeholder='Email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <label className={styles.form_label}>Username</label>
                    <input
                        className={styles.form_field}
                        type='text'
                        placeholder='Username' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <label className={styles.form_label}>Password</label>
                    <input
                        className={styles.form_field}
                        type='password'
                        placeholder='********' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <label className={styles.form_label}>Confirm password</label>
                    <input
                        className={styles.form_field}
                        type='password'
                        placeholder='********' 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </FormGroup>

                <SubmitBtn>Register</SubmitBtn>

                <p className={styles.link_text}>
                    Already have an account?
                    <a className={styles.link} href='/login'> Login</a>
                </p>
            </Form>
        </div>
    )
}


export default RegisterPage;
