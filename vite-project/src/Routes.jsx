import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Home, Profile, SignIn, SignUp } from './Pages/index';

// Define loader functions if needed
const homeLoader = async () => {
    // Fetch data for Home page
    return {};
};

const profileLoader = async () => {
    // Fetch data for Profile page
    return {};
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true, // This makes it the index route
                element: <Home />,
                loader: homeLoader
            },
            {
                path: 'profile',
                element: <Profile />,
                loader: profileLoader
            },
            {
                path: 'signin',
                element: <SignIn />
            },
            {
                path: 'signup',
                element: <SignUp />
            }
        ]
    }
]);

export default router;
