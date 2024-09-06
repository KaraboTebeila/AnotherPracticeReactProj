import React from 'react'
import { useLoaderData } from 'react-router-dom';

const CommentPage = () => {
  const comment = useLoaderData();
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-start">
            {/* <!-- User Avatar --> */}
            <img src="https://via.placeholder.com/64" alt="User Avatar" className="w-16 h-16 rounded-full mr-4"/>

            {/* <!-- Tweet Content --> */}
            <div className="flex-1">
                {/* <!-- User Info --> */}
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold text-gray-900">{comment.name}</span>
                        <span className="text-sm text-gray-500 ml-1">{comment.email}</span>
                        <span className="text-sm text-gray-500 ml-1">· 2h</span>
                    </div>
                    <div>
                        <svg className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.75 7.75L10 10.99 13.25 7.75 14.66 9.16 10 13.82 5.34 9.16z"/></svg>
                    </div>
                </div>
                {/* <!-- Tweet Text --> */}
                <p className="text-gray-800 mt-2">
                    {comment.body}
                </p>
                {/* <!-- Tweet Actions --> */}
                <div className="flex items-center justify-between mt-4 text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-blue-500">
                        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 15a7 7 0 007 7 7 7 0 100-14 7 7 0 00-7 7zm1.1-4.62a.9.9 0 010 1.27l-1.65 1.65a.9.9 0 01-1.27 0 .9.9 0 010-1.27l1.65-1.65a.9.9 0 011.27 0zm2.6 2.61a.9.9 0 010 1.27l-1.65 1.65a.9.9 0 01-1.27 0 .9.9 0 010-1.27l1.65-1.65a.9.9 0 011.27 0zm7.1-1.38a.9.9 0 010 1.27l-1.65 1.65a.9.9 0 01-1.27 0 .9.9 0 010-1.27l1.65-1.65a.9.9 0 011.27 0zM5 4.89A2.22 2.22 0 017.22 7H5V4.89zm2.6 0h.99A2.22 2.22 0 0110.81 7H7.6V4.89z"/></svg>
                        <span className="text-sm">12</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-green-500">
                        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11v4h3a1 1 0 010 2h-3v2a1 1 0 01-2 0v-2H6a1 1 0 010-2h3V7a1 1 0 012 0z"/></svg>
                        <span className="text-sm">34</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-red-500">
                        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.6 3.4A7.978 7.978 0 0110 2C4.48 2 0 6.48 0 12c0 1.61.44 3.13 1.21 4.42a.993.993 0 01.21.82l-.98 3.67a1.012 1.012 0 001.24 1.24l3.67-.98c.3-.08.58-.27.81-.49A8.054 8.054 0 0010 18c5.52 0 10-4.48 10-10 0-2.05-.62-3.96-1.73-5.57l-1.45 1.46A7.01 7.01 0 0110 15c-1.47 0-2.84-.45-3.96-1.24l-.44.44-2.39.64.64-2.39.44-.44A7.01 7.01 0 0110 3c1.6 0 3.1.49 4.35 1.34l1.45-1.46c-1.23-.96-2.71-1.54-4.4-1.54-2.39 0-4.61 1.12-6.04 2.96l1.48 1.48A5.962 5.962 0 0110 5a6 6 0 011 11.86c-.3.08-.58.27-.81.49l-.83 2.39-2.39-.83a.987.987 0 01-.21-.81A8.054 8.054 0 0110 18a7.978 7.978 0 014.6-14.6z"/></svg>
                        <span className="text-sm">8</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-500">
                        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.5 2a.5.5 0 00-.5.5v.75H5a.5.5 0 000 1h1.992L7 12.148 5.702 9.974a.5.5 0 00-.45-.274H3.53a.5.5 0 00-.451.737l4.068 6.837a.5.5 0 00.898 0l4.068-6.837a.5.5 0 00-.45-.737H10.75a.5.5 0 00-.451.274L9 12.148l.008-7.898H11a.5.5 0 000-1H8.5v-.75a.5.5 0 00-.5-.5z"/></svg>
                        <span className="text-sm">Share</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

  );
};

const commentLoader = async ({ params }) => {
  const res = await fetch(`/api/comments/${params.id}`);
  const data = await res.json();
  return data;
}

export {CommentPage as default, commentLoader}