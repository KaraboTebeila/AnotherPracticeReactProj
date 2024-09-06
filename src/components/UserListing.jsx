import React from 'react'
import { useState } from 'react'
import UserPage from '../pages/UserPage'

const UserListing = ({ user }) => {

    return (
    <div>
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{user.name}</div>
                        <h3 className="text-xl font-bold text-blue-500">{ user.username}</h3>
                    </div>

                    <div className="mb-5">
                        <label><b>Email</b></label> : {user.email}
                    </div>

                    <div className="mb-5">
                        <label><b>Street Name</b></label> : {user.address.street}
                    </div>

                    <div className="mb-5">
                        <label><b>Suite</b></label> : {user.address.suite}
                    </div>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <a href={`/users/${user.id}`}
                            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                            Read More
                        </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserListing