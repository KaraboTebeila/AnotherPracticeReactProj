import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CommentsPage from './pages/CommentsPage';
import PhotosPage from './pages/PhotosPage';
import UsersPage from './pages/UsersPage';
import UserPage, { userLoader } from './pages/UserPage';
import CommentPage, { commentLoader } from './pages/CommentPage';
import PhotoPage, { photoLoader } from './pages/PhotoPage';


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path='/comments' element={<CommentsPage />}/>
        <Route path='/comments/:id' element={<CommentPage />} loader={commentLoader} />
        <Route path='/photos' element={<PhotosPage />}/>
        <Route path='/photos/:id' element={<PhotoPage />} loader={photoLoader} />
        <Route path='/users' element={<UsersPage />}/>
        <Route path='/users/:id' element={<UserPage />}  loader={userLoader} />
        
        {/* <Route path='*' element={<NotFoundPage />}/> */}
      </Route>
    )
  );
  
  return (
    <RouterProvider router={router} />
  )
};

export default App;