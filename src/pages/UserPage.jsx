import React from 'react'
import { useLoaderData } from 'react-router-dom';

const UserPage = () => {
    const user = useLoaderData();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        {/* <!-- User Avatar --> */}
        <div className="flex justify-center">
            <img className="w-24 h-24 rounded-full shadow-lg" src="https://via.placeholder.com/150" alt="User Avatar"></img>
        </div>

        {/* <!-- User Info --> */}
        <div className="text-center mt-4">
            <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-gray-600">{user.username}</p>
            <p className="mt-2 text-sm text-gray-500">{user.email}</p>
            <div className="border-t">
                <h6 className="mt-2 text-blue-500">Address</h6>
                <p className="mt-2 text-sm text-gray-500">{user.address.street} Street</p>
                <p className="mt-2 text-sm text-gray-500">{user.address.suite}</p>
                <p className="mt-2 text-sm text-gray-500">{user.address.city} City</p>
                <p className="mt-2 text-sm text-gray-500">{user.address.zipcode} ZIP</p>
                <p className="mt-2 text-sm text-gray-500">{user.address.geo.lat} lng</p>
                <p className="mt-2 text-sm text-gray-500">{user.address.geo.lng} lat</p>
            </div>
            <p className="mt-2 text-sm text-gray-500">{user.phone}</p>
            <p className="mt-2 text-sm text-gray-500">{user.website}</p>
            <div className='border-t'>
                <h6 className="mt-2 text-blue-500">Company</h6>
                <p className="mt-2 text-sm text-gray-500">{user.company.name}</p>
                <p className="mt-2 text-sm text-gray-500">{user.company.catchPhrase}</p>
                <p className="mt-2 text-sm text-gray-500">{user.company.bs}</p>
            </div>
        </div>

        {/* <!-- Social Media Links --> */}
        <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M24 4.56v15.08C24 21.1 23.1 22 22.08 22H1.92C.9 22 0 21.1 0 19.92V4.56C0 3.44.9 2.56 1.92 2.56h20.16C23.1 2.56 24 3.44 24 4.56zM7.94 19h-3v-8h3v8zm-1.5-9.18c-.96 0-1.73-.79-1.73-1.75 0-.96.77-1.75 1.73-1.75.96 0 1.73.79 1.73 1.75 0 .96-.77 1.75-1.73 1.75zM20 19h-3v-4.44c0-1.06-.87-1.94-1.94-1.94h-.06c-1.06 0-1.94.87-1.94 1.94V19h-3v-8h3v1.18c.59-.88 1.61-1.45 2.68-1.45h.03c2.14 0 3.93 1.79 3.93 3.94V19z"/>
                </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23.99 4.54c-.88.39-1.83.65-2.82.77 1.01-.6 1.79-1.56 2.16-2.7-.95.56-2.01.97-3.13 1.2-.9-.96-2.17-1.55-3.58-1.55-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.76.12 1.13C7.69 8.09 4.07 6.13 1.64 3.16c-.42.73-.66 1.57-.66 2.48 0 1.71.87 3.23 2.19 4.12-.81-.02-1.56-.25-2.23-.62v.06c0 2.39 1.7 4.39 3.95 4.84-.41.11-.85.17-1.3.17-.32 0-.63-.03-.93-.09.63 1.97 2.44 3.4 4.59 3.44-1.68 1.32-3.79 2.1-6.08 2.1-.39 0-.78-.02-1.16-.07 2.17 1.4 4.75 2.23 7.52 2.23 9.03 0 13.97-7.48 13.97-13.97 0-.21 0-.41-.01-.61.95-.69 1.78-1.56 2.44-2.54z"/>
                </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 5.51 4.45 9.96 9.96 9.96 5.51 0 9.96-4.45 9.96-9.96 0-5.51-4.45-9.96-9.96-9.96zM9.54 17.97H7.36V10h2.18v7.97zm-1.09-9.07c-.7 0-1.28-.58-1.28-1.28 0-.7.58-1.28 1.28-1.28.7 0 1.28.58 1.28 1.28 0 .7-.58 1.28-1.28 1.28zM17.72 17.97h-2.18v-3.89c0-2.23-2.68-2.05-2.68 0v3.89H10.7V10h2.15v1.23h.03c.29-.56 1.12-1.1 2.3-1.1 2.46 0 2.94 1.62 2.94 3.73v4.1z"/>
                </svg>
            </a>
        </div>
    </div>
</div>

         
  );
};

const userLoader = async ({ params }) => {
    const res = await fetch(`/api/users/${params.id}`);
    const data = await res.json();
    return data;
  }

export {UserPage as default, userLoader};