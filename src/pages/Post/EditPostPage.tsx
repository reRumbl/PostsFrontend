import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/client';
import Form, { FormGroup, SubmitBtn } from '../../components/Form/Form';
import Layout from '../../components/Layout/Layout';
import type { Post } from '../../types/Post';
import { getCurrentUserId } from '../../utils/Jwt';
import { awsUrl } from '../../utils/Network';
import styles from './UploadPostPage.module.css';


const EditPostPage: React.FC = () => {
    const postId = useParams().postId;
    const [post, setPost] = useState<Post>();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await api.get(`/posts/${postId}`);
                setPost(response.data);
            } catch {
                alert('Getting post error')
            }
        }

        fetchPost();
    }, [postId])
    
    if (!post) {
        return (
            <div>
                Post not found
            </div>
        )
    }

    if (post.author_id != getCurrentUserId()) {
        window.location.href = `/posts/${post.id}`;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.put(`/posts/${post.id}`, {
                title: title,
                description: description
            });
            window.location.href = `/posts/${post.id}`;
        } catch {
            alert('Edit error');
        }
    }

    return (
        <Layout>
            <div className={styles.container}>
                <h2 className={styles.page_title}>Edit post</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <label className={styles.form_label}>Title</label>
                        <input
                            type='text'
                            placeholder='Post title' 
                            value={title || post.title} 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label className={styles.form_label}>Description</label>
                        <textarea
                            placeholder='Post description' 
                            value={description || post.description} 
                            onChange={(e) => setDescription(e.target.value)}
                            rows={8}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label className={styles.form_label}>Image</label>
                        <img src={`${awsUrl}/${post.image_url}`} />
                    </FormGroup>

                    <SubmitBtn>Save</SubmitBtn>
                </Form>
            </div>
        </Layout>
    )
}


export default EditPostPage;
