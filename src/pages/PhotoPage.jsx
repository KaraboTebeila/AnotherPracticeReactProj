import React from 'react'
import { useLoaderData } from 'react-router-dom';

const PhotoPage = () => {
  const photo = useLoaderData();
  return (
    <div className='content-center py-20 mx-40'>
      <img src={photo.url}></img>
    </div>
  )
}

const photoLoader = async ({ params }) => {
  const res = await fetch(`/api/photos/${params.id}`);
  const data = await res.json();
  return data;
}

export {PhotoPage as default, photoLoader}