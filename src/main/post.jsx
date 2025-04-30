import React, { useState } from 'react'
import { LikeButton } from './likebutton';
import EditPostItem from './editPost';
import { usePosts } from '../context/PostContext';
import Comment from './comment';
import AddComment from './addcomment';

const Post = ({ postItem }) => {
    const { userId, id, _id, title, body, likes, comments } = postItem;
    const [editPost, setEditPost] = useState(null);
    const [addComments, setAddcomments] = useState(false);
    const { deletePost } = usePosts();

    return (
        <div>
            {/* component */}
            {/* post card */}
            <div>
                {_id},{id}
            </div>
            <div className={`${addComments ? 'h-[420px]' : 'h-[300px]'} bg-white shadow-lg rounded-lg mx-4 md:mx-auto transition-all duration-100  max-w-md md:max-w-2xl ${editPost ? 'hidden' : 'flex flex-col'}`}>
                {/*horizantil margin is just for display*/}
                <div className="flex items-start px-4 py-6">
                    <img
                        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="avatar"
                    />
                    <div className="">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                                Brad Adams{" "}
                            </h2>
                            <small className="text-sm text-gray-700">22h ago</small>
                        </div>
                        <p className="text-green-700 font-semibold text-xl">{title}</p>
                        <p className="mt-3 text-gray-700 text-sm">
                            {body}
                        </p>
                        <div className="mt-4 flex items-center">
                            <div className="">
                                <LikeButton number={likes} />
                            </div>
                            <div>
                                <Comment commentno={comments.lenght} />
                            </div>
                            <div className="flex  text-gray-700 text-sm mr-4 cursor-pointer" onClick={() => { setAddcomments(!addComments) }}>
                                <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 mr-1"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                    />
                                </svg>
                                <span >{addComments ? 'cancel' : 'add comment'}</span>
                            </div>
                            <div className='flex gap-2'>
                                <button className='text-blue-700 underline hover:text-white p-2  hover:bg-blue-700 transition-all duration-150 rounded-lg' onClick={() => { setEditPost(postItem) }}>Edit</button>
                                <button className='text-red-700 underline hover:text-white p-2 hover:bg-red-700 transition-all duration-150 rounded-lg' onClick={() => { deletePost(postItem.id) }}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                {addComments && <AddComment postItemId={id} onCancel={() => { setAddcomments(false) }} />}
            </div>
            {editPost && <EditPostItem postItem={editPost} onCancel={() => { setEditPost(null) }} />}

        </div>
    )
}

export default Post