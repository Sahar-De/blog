import React, { useMemo } from 'react'
import { usePosts } from '../context/PostContext'

const usetopPosts = (count = 5) => {

    const { posts } = usePosts();
    return useMemo(() => {
        const topPosts = [...posts].sort((a, b) => b.likes - a.likes).slice(0, count);
        return topPosts;
    }, [posts, count])

}

export default usetopPosts