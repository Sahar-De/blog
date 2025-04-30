import React, { useRef, useState } from 'react'
import { usePosts } from '../context/PostContext';

const CreateNewPpost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(false);
    const { addPost } = usePosts();
    const titleInputRef = useRef(null)

    const cancelAddNewpost = () => {
        setBody('');
        setTitle('');
        setError(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && body) {
            addPost({ title, body });
            setBody('');
            setTitle('');
            titleInputRef.current.focus();
            setError(false);
        }
        else {
            setError(true);
        }

    }

    return (
        <form className='w-full p-5 gap-5' onSubmit={handleSubmit}>
            <h4 className='text-gray-800 font-semibold py-2.5'>Create New Post</h4>
            {error && <p className='text-red-600 text-base font-bold'>Please fill the title and body</p>}
            <div className='flex flex-col items-start gap-y-5 justify-between'>
                <input placeholder='title' className='w-4/5 border outline-0 p-1 border-gray-200 rounded-md' ref={titleInputRef} value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <textarea placeholder='body' className='w-4/5 border outline-0 p-1 border-gray-200 rounded-md' value={body} onChange={(e) => { setBody(e.target.value) }} />
                <div className='flex w-full items-center justify-start gap-x-10 '>
                    <button className='border text-green-500 p-1.5 rounded-md hover:bg-green-500 hover:text-white transition-all duration-150' type='submit'>Create Post</button>
                    <button type="button" className='border text-red-500 p-1.5 rounded-md hover:bg-red-500 hover:text-white transition-all duration-150' onClick={cancelAddNewpost}>Cancel</button>

                </div>
            </div>

        </form>
    )
}

export default CreateNewPpost