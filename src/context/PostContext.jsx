import { createContext, useCallback, useEffect, useMemo, useReducer, useState, useContext } from 'react';

export const PostContext = createContext();

const initialState = {
    posts: [],
    loading: false,
    error: null,
    searchQuery: ''
}
const postsReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return { ...state, posts: action.payload, loading: false }
        case 'FETCH_POSTS_FAILURE':
            return { ...state, loading: false, error: action.payload }
        case 'SEARCH_POSTS':
            return { ...state, searchQuery: action.payload }
        case 'ADD_POST':
            return { ...state, posts: [action.payload, ...state.posts] }
        case 'DELETE_POST':
            return { ...state, posts: state.posts.filter(post => post._id !== action.payload) }
        case 'EDIT_POST':
            return {
                ...state,
                posts: state.posts.map(post =>
                    post._id === action.payload.id
                        ? { ...post, ...action.payload.data }
                        : post)
            }
        case 'ADD_COMMENT':
            return {
                ...state,
                posts: state.posts.map(post =>
                    post._id === action.payload.postId
                        ? { ...post, comments: [...post.comments, action.payload.comment] }
                        : post)
            }
        case 'SET_LOADING':
            return { ...state, loading: action.payload }
        default:
            return state;
    }
}

export const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postsReducer, initialState);

    const setPosts = useCallback(async () => {
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            // Add _id and createdAt to each post for consistency
            const postsWithId = data.map(post => ({
                ...post,
                likes: Math.floor(Math.random() * 100),
                _id: post.id,
                comments: post.comments ? post.comments : [],
                createdAt: new Date().toISOString()

            }));
            dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: postsWithId });
        } catch (error) {
            dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
        }
    }, []);

    const addPost = useCallback((post) => {
        const newPost = {
            ...post,
            _id: Date.now().toString(),
            likes: post.likes ? post.likes : 0,
            comments: post.comments ? post.comments : [],
            createdAt: new Date().toISOString()
        }
        dispatch({ type: 'ADD_POST', payload: newPost });
    }, []);

    const addComment = useCallback((postId, comment) => {
        dispatch({ type: 'ADD_COMMENT', payload: { postId, comment } });
    }, []);

    const deletePost = useCallback((postId) => {
        dispatch({ type: "DELETE_POST", payload: postId })
    }, [])

    const editPost = useCallback((id, data) => {
        dispatch({ type: "EDIT_POST", payload: { id, data } })
    }, []);

    const searchPost = useCallback((query) => {
        dispatch({ type: 'SEARCH_POSTS', payload: query.toLowerCase() })
    }, [])

    const filteredPosts = useMemo(() => {
        return state.posts.filter(post =>
            post.title.toLowerCase().includes(state.searchQuery) ||
            post.body.toLowerCase().includes(state.searchQuery)
        )
    }, [state.posts, state.searchQuery]);

    const sortedPosts = useMemo(() => {
        return [...filteredPosts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }, [filteredPosts]);

    const value = useMemo(() => ({
        posts: sortedPosts,
        searchQuery: state.searchQuery,
        loading: state.loading,
        error: state.error,
        setPosts,
        addPost,
        deletePost,
        editPost,
        searchPost,
        addComment
    }), [sortedPosts, state.searchQuery, state.loading, state.error, setPosts, addPost, deletePost, editPost, searchPost, addComment]);

    useEffect(() => {
        setPosts();
    }, []);

    return (
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    );
};

export const usePosts = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePosts must be used within a PostProvider');
    }
    return context;
};
