import React from 'react'
import CommentListing from './CommentListing'
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const CommentsListings = ({ isHome = false }) => {
  const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(  () => { 
      const fetchComments = async () => {
          const apiUrl = isHome ? '/api/comments?_limit=3' : '/api/comments'
          try {
              const res = await fetch(apiUrl);
              const data = await res.json();
              setComments(data);
          } catch (error) {
              console.log('Error fetching data ', error)
          }finally{
              setLoading(false);
          }
          
      }

      fetchComments();
   }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {isHome ? 'Recent Comments' : 'Browse Comments'}
            </h2>
            
            { loading ? (<Spinner loading={loading} />) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {comments.map((comment) => (
                            <CommentListing key={comment.id} comment={ comment }/>
                        ))}
                    </div>
                ) }
        </div>
    </section>
  )
}

export default CommentsListings