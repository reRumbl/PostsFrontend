import React, { useState } from 'react';
import api from '../../api/client';
import Form, { FormGroup, SubmitBtn, InputFile } from '../../components/Form/Form';
import Layout from '../../components/Layout/Layout';
import styles from './UploadPostPage.module.css';


const UploadPostPage: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [files, setFiles] = useState<File[]>([]);

    const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            const fileArray = Array.from(selectedFiles);
            setFiles(fileArray);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!files) {
                throw Error('Files not provided');
            }

            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            files.forEach(file => {
                formData.append('file', file);
            })

            const response = await api.postForm('/posts/upload', formData);
            window.location.href = `/posts/${response.data.id}`;
        } catch {
            alert('Upload error');
        }
    }

    return (
        <Layout>
            <div className={styles.container}>
                <h2 className={styles.page_title}>Upload post</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <label className={styles.form_label}>Title</label>
                        <input
                            type='text'
                            placeholder='Post title' 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label className={styles.form_label}>Description</label>
                        <textarea
                            placeholder='Post description' 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                            rows={8}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label className={styles.form_label}>Image</label>
                        <InputFile 

                            isMultiple={false}
                            onChange={handleFilesChange}
                        />
                    </FormGroup>

                    <SubmitBtn>Upload</SubmitBtn>
                </Form>
            </div>
        </Layout>
    )
}


export default UploadPostPage;
