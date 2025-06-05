import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/client';
import type { Post } from '../../types/Post';
import type { User } from '../../types/User';
import baseUrl, { awsUrl } from '../../utils/Network';
import { getCurrentUserId } from '../../utils/Jwt';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal/Modal';
import styles from './PostPage.module.css';


const PostsPage: React.FC = () => {
    const postId = useParams().postId;
    const [post, setPost] = useState<Post>();
    const [author, setAuthor] = useState<User>();
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await api.get(`/posts/${postId}`);
                setPost(response.data);
            } catch {
                alert('Getting post error')
            }
        }

        const fetchUser = async () => {
            try {
                if (post?.author_id) {
                    const response = await api.get(`/auth/users/${post.author_id}`);
                    setAuthor(response.data);
                }
            } catch {
                alert('Getting user error');
            }
        }

        fetchPost();
        fetchUser();
    }, [postId, post?.author_id])

    if (!post) {
        return <div>
            Error
        </div>
    }

    const handleCopyButton = async () => {
        try {
            await navigator.clipboard.writeText(window.location.toString());
            setIsShareModalOpen(false);
        } catch {
            alert('Copy link error');
        }
    }

    const handleDeleteButton = async () => {
        try {
            await api.delete(`/posts/${post.id}`);
            window.location.href = '/';
        } catch {
            alert('Deleting post error')
        }
    }

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.post}>
                    <div className={styles.img_div}>
                        <img className={styles.post_img} src={`${awsUrl}/${post.image_url}`} />
                    </div>
                    <div className={styles.info_div}>
                        <h2 className={styles.post_title}>{post.title}</h2>
                        <p className={styles.post_description}>{post.description}</p>
                        <div className={styles.actions}>
                            <button
                                className={`${styles.action} ${styles.save_btn}`}
                            >
                                <a href={`${awsUrl}/${post.image_url}`}>
                                    <img src={`${baseUrl}/icons/save.svg`}/>
                                </a>
                            </button>

                            <button
                                className={`${styles.action} ${styles.share_btn}`}
                                onClick={() => {setIsShareModalOpen(true)}}
                            >
                                <img src={`${baseUrl}/icons/share.svg`}/>
                            </button>
                            {getCurrentUserId() === post.author_id && 
                                <button 
                                    className={`${styles.action} ${styles.edit_btn}`}
                                >
                                    <a href={`/posts/edit/${post.id}`}>
                                        <img src={`${baseUrl}/icons/edit.svg`}/>
                                    </a>
                                </button>
                            }
                            {getCurrentUserId() === post.author_id && 
                                <button 
                                    className={`${styles.action} ${styles.delete_btn}`} 
                                    onClick={() => {setIsDeleteModalOpen(true)}}
                                >
                                    <img src={`${baseUrl}/icons/delete.svg`}/>
                                </button>
                            }
                        </div>
                        <div className={styles.author_info}>
                            <a className={styles.author_info_link} href={`/users/${author?.id}`}>
                                <img className={styles.author_img} src={`${baseUrl}/icons/user.svg`} />
                                <p className={styles.author_name}>{author?.username}</p>
                            </a>
                        </div>
                    </div>
                </div>

                <Modal
                    isOpen={isShareModalOpen}
                    onClose={() => setIsShareModalOpen(false)}
                    title='Share post'
                >
                    <div className={styles.modal_body}>
                        <p>
                            If you want to share this post you can copy this link below and send it wherever you want
                        </p>
                        <div className={styles.copy_link_container}>
                            <p className={styles.copy_link}>{window.location.toString()}</p>
                            <button 
                                className={styles.copy_link_btn}
                                onClick={handleCopyButton}
                            >
                                <img src={`${baseUrl}/icons/copy.svg`}/>
                            </button>
                        </div>
                    </div>
                </Modal>

                <Modal
                    isOpen={isDeleteModalOpen}
                    onClose={() => setIsDeleteModalOpen(false)}
                    title='Confirm deleting'
                >
                    <div className={styles.modal_body}>
                        <p>Are you sure you want to delete this post?</p>
                        <div className={styles.modal_button_div}>
                            <button 
                                className={styles.delete_modal_button} 
                                onClick={handleDeleteButton}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </Layout>
    )
}


export default PostsPage;
