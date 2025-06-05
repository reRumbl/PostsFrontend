import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import type { User } from '../../types/User';
import type { Post } from '../../types/Post';
import api from '../../api/client';
import baseUrl from '../../utils/Network';
import Layout from '../../components/Layout/Layout';
import PostCard from '../../components/Post/PostCard';
import styles from './UserPage.module.css';


const UserPage: React.FC = () => {
    const userId = useParams().userId;
    const [user, setUser] = useState<User>();
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get(`/auth/users/${userId}`);
                setUser(response.data);
            } catch {
                alert('Getting user error');
            }
        }

        const fetchPosts = async () => {
            try {
                const response = await api.get(`/posts/user/${userId}`);
                setPosts(response.data);
            } catch {
                alert('Getting posts error');
            }
        }

        fetchUser();
        fetchPosts();
    }, [userId])

    if (!user) {
        return <div>
            Error
        </div>
    }

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.user_info}>
                    <div className={styles.user_img}>
                        <img className={styles.avatar} src={`${baseUrl}/icons/user.svg`} />
                    </div>
                    <h2 className={styles.username}>{user.username}</h2>
                </div>
                <div className={styles.posts_section}>
                    <h2>{user.username} Posts</h2>
                    <div className={styles.user_posts}>
                        {posts.map((post) => (<PostCard {...post} visibleAuthor={true} key={post.id} />))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default UserPage;
