import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const CommentListing = ({ comment }) => {
    const [showFullBody, setShowFullBody] = useState(false);

    let body = comment.body;

    if(!showFullBody){
        body = body.substring(0, 90) + '...';
      }
  return (
    <div>
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{comment.name}</div>
                        <h3 className="text-xl font-bold">{ comment.email}</h3>
                    </div>

                    <div className="mb-5">
                        {body}
                    </div>

                    <button onClick={() => setShowFullBody((prevState) => !prevState) } className='text-indigo-500 mb-5 hover:text-indigo-600'>
                        {showFullBody ? 'Less' : 'More'}
                    </button>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <Link to={`/comments/${comment.id}`}
                            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                            Read More
                        </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommentListing