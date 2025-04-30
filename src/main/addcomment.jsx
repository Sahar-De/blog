import React, { useState } from 'react'
import { usePosts } from '../context/PostContext';

const AddComment = ({ postItemId, onCancel }) => {
    const [comment, setComment] = useState('');
    const { addComment, posts } = usePosts();
    const saveComment = () => {
        addComment(postItemId, comment);
        setComment('');
        onCancel();
        
    }
    return (
        <div className='w-full flex p-5 flex-col justify-between gap-5'>
            <textarea placeholder='comment' value={comment} onChange={(e) => setComment(e.target.value)} className='w-full p-2 outline-0 border border-gray-100 rounded-md' />
            <div className='flex w-full justify-between'>
                <button type='button' className='p-1.5 border text-sm rounded-md text-white bg-green-500' onClick={saveComment}>save</button>
                <button type='button' className='p-1.5 border text-sm rounded-md text-white bg-red-500' onClick={onCancel}>cancel</button>
            </div>
        </div>
    )
}

export default AddComment