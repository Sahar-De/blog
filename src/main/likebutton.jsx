import React, { useEffect, useState } from 'react';

export const LikeButton = ({ number }) => {
    const [like, setLike] = useState(false);
    const [likeNo, setLikeNo] = useState(number);

    const handleLikeClick = () => {
        if (like) {
            setLikeNo(likeNo - 1);
        } else {
            setLikeNo(likeNo + 1);
        }
        setLike(!like);
    };

    useEffect(() => {
        setLikeNo(number);
    }, [number]);

    return (
        <div className='flex text-gray-700 text-sm mr-8 cursor-pointer' onClick={handleLikeClick}>
            <svg
                fill={like ? 'red' : 'none'}
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1 cursor-pointer"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
            </svg>
            <span>{likeNo}</span>
        </div>
    );
};
