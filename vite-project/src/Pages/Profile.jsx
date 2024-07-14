import React from 'react';
import { Header } from '../Components';
import Sidebar from '../Components/sidebar/Sidebar';
import Feed from '../Components/feed/Feed';
import Rightbar from '../Components/rightbar/Rightbar';
import Footer from "../Components/Footer/Footer"
// All user data is retrieved from store 
import { useSelector } from 'react-redux';

function Profile() {

  const Data = useSelector((state) => state);

  const userInfo = Data.auth.UserInfo;
  const posts = Data.auth.UserPost;
  console.log(userInfo, posts);

  if (!userInfo || !posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header avatar={userInfo?.avatar} />
      <div className="mt-10 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="hidden md:block">
            <Sidebar className="bg-white p-4 shadow-lg rounded-lg" />
          </div>

          <div className="flex flex-col gap-4 w-full">
            {/* cover image */}
            <div className="relative">
              <img src={userInfo?.coverimage} alt="Cover" className="w-full h-40 md:h-64 object-cover rounded-lg" />
              {/* profile image */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-44px]">
                <img src={userInfo?.avatar} alt="Profile" className="h-24 w-24 border-4 border-white rounded-full object-cover" />
              </div>
            </div>
            {/* name and caption */}
            <div className="text-center mt-12">
              <h2 className="text-xl font-semibold">{userInfo?.fullname}</h2>
              <p className="text-gray-600">{userInfo?.username}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Feed className="flex-grow bg-white p-4 shadow-lg rounded-lg" avatar={userInfo?.avatar} name={userInfo?.fullname} posts={posts} />
              <div className="hidden md:block">
                <Rightbar profile={true} className="bg-white p-4 shadow-lg rounded-lg" />
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Profile;
