import React from 'react'
import Feed from '../main/postlist'
import CreateNewPpost from '../main/createpost'
import TopPosts from '../main/topPosts'

import SearchBar from '../general/searchbar'

const Home = () => {
    return (
        <div className='grid  grid-cols-[1fr_2fr] gap-x-2.5'>
            <div className='flex flex-col gap-5 grid-cols-1'>
                <h5 className='text-pink-600 text-lg font-bold p-2.5 bg-violet-200'>Top Posts</h5>
                <TopPosts />
            </div>

            <div className='flex flex-col gap-y-5 grid-cols-2'>
                <SearchBar />
                <CreateNewPpost />
                <Feed />
            </div>

        </div>
    )
}

export default Home