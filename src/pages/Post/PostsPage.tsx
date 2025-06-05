import React, { useState, useEffect } from 'react';
import api from '../../api/client';
import type { Post } from '../../types/Post';
import PostCard from '../../components/Post/PostCard';
import type { PaginationInfo } from '../../types/Pagintaion';
import PaginationNav from '../../components/Pagination/PaginationNav';
import Layout from '../../components/Layout/Layout';
import styles from './PostsPage.module.css';


const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [pagination, setPagination] = useState<PaginationInfo>({
        limit: 10,
        offset: 0,
        count: 0
    });

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get(`/posts/feed?limit=${pagination.limit}&offset=${pagination.offset}`);
                setPosts(response.data.data);
                setPagination(response.data.pagination);
            } catch {
                alert('Getting posts error')
            }
        }

        fetchPosts();
    }, [pagination.limit, pagination.offset])

    return (
        <Layout>
            <div className={styles.container}>
                <h2 className={styles.page_title}>Posts</h2>
                <div className={styles.cards_div}>
                    {posts.map((post) => (<PostCard {...post} visibleAuthor={true} key={post.id} />))}
                </div>

                <PaginationNav
                    totalItems={pagination.count}
                    itemsPerPage={pagination.limit}
                />
            </div>
        </Layout>
    )
}


export default PostsPage;
