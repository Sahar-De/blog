import React, { useState } from 'react'
import { LikeButton } from './likebutton'
import { usePosts } from '../context/PostContext';

const EditPostItem = ({ postItem, onCancel }) => {
    const [Title, setTitle] = useState(postItem.title);
    const [Body, setBody] = useState(postItem.body);
    const { editPost } = usePosts();
    const handleSubmit = (e) => {
        e.preventDefault();
        editPost(postItem.id, { title: Title, body: Body })
        onCancel();

    }
    return (
        <form onSubmit={handleSubmit} className={` bg-white shadow-lg rounded-lg mx-4 md:mx-auto  max-w-md md:max-w-2xl ${postItem ? 'flex' : 'hidden'}`}>
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
                    <input className='w-full mt-3 text-gray-700 text-sm border outline-0  p-1 rounded-md' value={Title} onChange={e => setTitle(e.target.value)} />
                    <textarea onChange={(e) => { setBody(e.target.value) }} className="mt-3 text-gray-700 text-sm border outline-0 w-full p-1 rounded-md" value={Body}>

                    </textarea>
                    <div className="mt-4 flex items-center">
                        <div className="">
                            <LikeButton />
                        </div>
                        <div className="flex  text-gray-700 text-sm mr-8">
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
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                />
                            </svg>
                            <span>8</span>
                        </div>
                        <div className="flex  text-gray-700 text-sm mr-4">
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
                            <span>share</span>
                        </div>
                        <div className='flex gap-2'>
                            <button className='text-green-700 underline hover:text-white p-2  hover:bg-green-700 transition-all duration-150 rounded-lg'>Save</button>
                            <button className='text-red-700 underline hover:text-white p-2 hover:bg-red-700 transition-all duration-150 rounded-lg' onClick={onCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EditPostItem