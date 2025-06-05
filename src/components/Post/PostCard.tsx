import React, { useState, useEffect } from 'react';
import api from '../../api/client';
import type { Post } from '../../types/Post';
import type { User } from '../../types/User';
import baseUrl, { awsUrl } from '../../utils/Network';
import styles from './PostCard.module.css';


interface PostCardProps extends Post {
    visibleAuthor?: boolean;
}


const PostCard: React.FC<PostCardProps> = (props: PostCardProps) => {
    const [author, setAuthor] = useState<User>();
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (props.visibleAuthor) {
                    const response = await api.get(`/auth/users/${props.author_id}`);
                    setAuthor(response.data);
                }
            } catch {
                alert('Getting user error')
            }
            
        }
        fetchUser();
    }, [props.author_id, props.visibleAuthor])
    
    return (
        <div className={styles.card}>
            <a className={styles.link} href={`/posts/${props.id}`}>
                <img className={styles.card_img} src={`${awsUrl}/${props.image_url}`} />
                <div className={styles.card_info}>
                    <h3 className={styles.card_title}>{props.title}</h3>
                    {props.visibleAuthor && 
                        <div className={styles.author_info}>
                            <img className={styles.author_img} src={`${baseUrl}/icons/user.svg`} />
                            <p className={styles.author_name}>{author?.username}</p>
                        </div>
                    }
                </div>
            </a>
        </div>
    )
}


export default PostCard;
