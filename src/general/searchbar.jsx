import React, { useState } from 'react'
import { usePosts } from '../context/PostContext'

const SearchBar = () => {
    const { searchPost, searchQuery } = usePosts();

    return (
        <div className='p-2 border border-gray-200 bg-white rounded-md flex items-center justify-between w-4/5 gap-x-2'>
            <input value={searchQuery} type="search" onChange={(e) => searchPost(e.target.value)} placeholder='search posts .....' className='outline-0 p-2 border border-gray-100 w-full rounded-md' />

        </div>
    )
}

export default SearchBar