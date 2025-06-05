import React, { useState, useEffect, useRef } from 'react';
import api from '../../api/client';
import { getCurrentUserId } from '../../utils/Jwt';
import type { User } from '../../types/User';
import baseUrl from '../../utils/Network';
import styles from './Header.module.css';


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [user, setUser] = useState<User>();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
        }
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userId = getCurrentUserId();
                if (!userId) {
                    return
                }
                const response = await api.get(`/auth/users/${userId}`);
                setUser(response.data);
            } catch {
                alert('Getting user error');
            }
        }

        fetchUser();
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogoutButton = async () => {
        try {
            await api.post('/auth/logout', {
                token: localStorage.getItem('refresh_token')
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            window.location.href = '/login';
        } catch {
            alert('Logout error');
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <a href='/' className={styles.logo_link}>
                    <img src={`${baseUrl}/icons/logo.svg`} />
                    <p className={styles.app_title}>Posts</p>
                </a>

                <nav className={styles.nav_links}>
                    <a className={styles.nav_link} href='/posts/upload'>Upload</a>
                </nav>

                <div className={styles.user_div}>
                    {user ? ( 
                        <div className={styles.user_info} ref={menuRef}>
                            <button className={styles.user_button} onClick={handleMenuToggle}>
                                <p className={styles.username}>{user.username}</p>
                                <img className={styles.avatar} src={`${baseUrl}/icons/user.svg`} />
                            </button>

                            {isMenuOpen && (
                                <div className={styles.dropdown_menu}>
                                    <button className={styles.menu_item} onClick={() => {location.href = `/users/${user.id}`}}>
                                        <p>Profile</p>
                                        <img src={`${baseUrl}/icons/user.svg`} />
                                    </button>
                                    <button className={styles.menu_item} onClick={handleLogoutButton}>
                                        <p>Logout</p>
                                        <img src={`${baseUrl}/icons/logout.svg`} />
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <a className={styles.login_url} href='/login'>Login</a>
                    )}
                </div>
            </div>
        </header>
    )
}


export default Header;
