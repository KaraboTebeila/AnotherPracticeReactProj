import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
                <h2 className="text-2xl font-bold">Comments</h2>
                <p className="mt-2 mb-4">
                    See the list of comments
                </p>
                <Link to='/comments'
                  className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                    Browse Comments
                </Link>
          </Card>
          <Card bg='bg-indigo-100'>
                <h2 className="text-2xl font-bold">Photos</h2>
                <p className="mt-2 mb-4">
                  See the list of photos
                </p>
                <Link to='/photos'
                  className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
                    Browse Photos
                </Link>
          </Card>
          <Card bg='bg-indigo-100'>
                <h2 className="text-2xl font-bold">Users</h2>
                <p className="mt-2 mb-4">
                  See the list of users
                </p>
                <Link to='/Photos'
                  className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
                    Browse Users
                </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards