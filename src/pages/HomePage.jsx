import React from 'react'
import Hero from '../components/Hero'
import CommentsListings from '../components/CommentsListings'
import HomeCards from '../components/HomeCards'
import UserListings from '../components/UserListings'
import PhotosListings from '../components/PhotosListings'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <CommentsListings isHome={true} />
        <PhotosListings isHome={true} />
        <UserListings isHome={true} />
        
    </>
  )
}

export default HomePage