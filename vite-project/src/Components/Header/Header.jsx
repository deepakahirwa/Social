import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { TextField, InputAdornment } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';


function Header() {
  const avatar = useSelector((state ) =>  state.auth.UserInfo.avatar );
  // console.log(avatar);
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Facebook</span>
          </NavLink>
          <div className="hidden md:flex flex-1 justify-center mx-4 md:mx-6">
            <TextField
              variant="outlined"
              placeholder="Search"
              size="small"
              className="w-full max-w-xs rounded-full"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                className: "bg-white dark:bg-gray-700 text-sm border-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white rounded-full"
              }}
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <NavLink to={"/profile"}>
              <img
                href="/profile"
                src={avatar}
                alt="Profile"
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-700"
                /></NavLink>
            </div>
            <button
              type="button"
              className="hidden md:inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
