import React from 'react'
import { Link } from 'react-router-dom';

const PhotoListing = ({ photo }) => {
  return (
    <div>
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{photo.title}</div>
                        <img src={ photo.url} className='object-contain'></img>
                    </div>

                    <div className="mb-5">
                        {photo.thumbnailUrl}
                    </div>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <Link to={`/photos/${photo.id}`}
                            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                            Read More
                        </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PhotoListing