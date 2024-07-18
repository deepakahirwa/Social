import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import { Home, Profile, SignIn, SignUp } from './Pages/index';
import { AuthLayout } from './Components/index';
import ErrorPage from './Pages/ErrorPage';

import authService from './Api/AuthApi.js';

import Store from './Store/Store';
import { login } from './Store/AuthSlice';

// Define loader functions if needed
const homeLoader = async () => {
    // Fetch data for Home page
    return {};
};

const profileLoader = async () => {
    try {
        const response = await authService.getUser();
        if (response) {
            const UserData = response[0];
            const UserPost = response[1];
            console.log('User Data:', UserData);
            console.log('User Post:', UserPost);
            Store.dispatch(login({ UserData, UserPost }));
            return {};
        } else {
            console.error('No response from authService.getUser()');
            return redirect('/signin');
        }
    } catch (error) {
        console.error('Error in profileLoader:', error);
        return redirect('/signin');
    }
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: (
                    <AuthLayout authentication={false}>
                        <Home />
                    </AuthLayout>
                ),
                loader: profileLoader,
            },
            {
                path: 'profile',
                element: (
                    <AuthLayout authentication={false}>
                        <Profile />
                    </AuthLayout>
                ),
                loader: profileLoader,
            },
            {
                path: 'signin',
                element: (
                    <AuthLayout authentication={false}>
                        <SignIn />
                    </AuthLayout>
                ),
            },
            {
                path: 'signup',
                element: (
                    <AuthLayout authentication={false}>
                        <SignUp />
                    </AuthLayout>
                ),
            },
        ],
    },
]);

export default router;
