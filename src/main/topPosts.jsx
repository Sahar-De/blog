import React from 'react'
import usetopPosts from '../hooks/usetopPosts'
import Post from './post';
import { usePosts } from '../context/PostContext';

const TopPosts = () => {
    const { posts } = usePosts();
    const topPosts = usetopPosts(5);

    return (
        <div>
            {topPosts.map((p, i) => (
                <Post key={i} postItem={p} />
            ))}
        </div>
    )
}

export default TopPosts