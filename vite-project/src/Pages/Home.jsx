import React from 'react';
import { Header, Footer } from '../Components';
import Rightbar from '../Components/rightbar/Rightbar.jsx';
import Sidebar from "../Components/sidebar/Sidebar.jsx";
import Feed from "../Components/feed/Feed.jsx";

import { useSelector } from 'react-redux';

function Home() {

  const Data = useSelector((state) => state);

  const userInfo = Data.auth.UserInfo;
  const posts = Data.auth.UserPost;
  console.log(userInfo, posts);

  if (!userInfo || !posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='flex flex-1 justify-center gap-4 mt-20 px-4'>
        <div className="hidden lg:block lg:w-1/4">
          <Sidebar className="bg-white p-4 rounded-lg shadow-md h-full" />
        </div>
        <div className="w-full lg:w-2/4">
          <Feed className="flex-grow bg-white p-4 shadow-lg rounded-lg" avatar={userInfo?.avatar} name={userInfo?.fullname} posts={posts} />

        </div>
        <div className="hidden lg:block lg:w-1/4">
          <Rightbar className="bg-white p-4 rounded-lg shadow-md h-full" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
