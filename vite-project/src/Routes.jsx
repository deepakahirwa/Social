import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home, Profile, SignIn, SignUp } from './Pages/index';
import { AuthLayout } from './Components/index';
import ErrorPage from './Pages/ErrorPage';

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
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, // This makes it the index route
                element: (
                    <AuthLayout authentication={true}>
                        <Home />
                    </AuthLayout>

                ),
                loader: homeLoader
            },
            {
                path: 'profile',
                element: (
                    <AuthLayout authentication={true}>
                        <Profile />
                    </AuthLayout>

                ),
                loader: profileLoader
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
            }
        ]
    }
]);

export default router;
