import React from 'react';
import { usePosts } from '../context/PostContext';
import Post from './post';

const Feed = () => {
    const { posts, loading, error } = usePosts();

    if (loading) return <div>Loading posts...</div>;
    if (error) return <div>Error: {error}</div>;

    // اضافه کردن بررسی وجود posts  
    if (!posts || posts.length === 0) {
        return <div>No posts available</div>;
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-y-8 gap-x-4 pt-10'>
            {posts.map((post, index) => (
                <Post key={post._id || index} postItem={post} />

            ))}
        </div>
    );
};

export default Feed;