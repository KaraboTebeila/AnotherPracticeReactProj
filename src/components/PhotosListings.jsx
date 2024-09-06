import React from 'react'
import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import PhotoListing from './PhotoListing'

const PhotosListings = ({ isHome = false }) => {

  const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(  () => { 
      const fetchPhotos = async () => {
          const apiUrl = isHome ? '/api/photos?_limit=3' : '/api/photos'
          try {
              const res = await fetch(apiUrl);
              const data = await res.json();
              setPhotos(data);
          } catch (error) {
              console.log('Error fetching data ', error)
          }finally{
              setLoading(false);
          }
          
      }

      fetchPhotos();
   }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {isHome ? 'Recent Photos' : 'Browse Photos'}
            </h2>
            
            { loading ? (<Spinner loading={loading} />) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {photos.map((photo) => (
                            <PhotoListing key={photo.id} photo={ photo }/>
                        ))}
                    </div>
                ) }
        </div>
    </section>
  )
}

export default PhotosListings