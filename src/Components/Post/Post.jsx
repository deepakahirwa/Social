import { useState } from "react";
import Like from "../../assets/Post/Like";
import Dislike from "../../assets/Post/Dislike";
export default function Post({ avatar,name,postImage,post,postCaption}) {
    const [likeCount, setLikeCount] = useState(post || 0);
    console.log(avatar,name,postImage);
    const likeHandler = () => {
        setLikeCount(likeCount + 1);
    };

    const unlikeHandler = () => {
        setLikeCount(likeCount > 0 ? likeCount - 1 : 0);
    };

    return (



        // md: w-[30vw] 
        <div className="p-4 w-full bg-white rounded-lg 
         shadow-lg shadow-gray-900 ">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <img
                        // md:w-14 md:h-14
                        className=" cursor-pointer w-10 h-10 border-2 rounded-full border-gray-700 p-0.5"
                        src={avatar}
                        alt=""
                    />
                    <div className="ml-4">
                        <span className="font-semibold cursor-pointer">{name}</span>
                        <span className="text-gray-500 text-sm block">{"1w ago"}</span>
                    </div>
                </div>
                <div className="text-gray-500 cursor-pointer">•••</div>
            </div>
            <div className="mb-4 shadow-slate-500">
                <span className="block">{postCaption}</span>
                <img
                    className="mt-2 w-full max-h-[300px] object-cover rounded-lg "
                    src={postImage[0]}
                    alt=""
                />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <button onClick={likeHandler} className="focus:outline-none">
                        <Like />
                    </button>
                    <button onClick={unlikeHandler} className="ml-2 focus:outline-none">
                        <Dislike />

                    </button>
                    <span className="ml-2 text-gray-500">{likeCount} people like it</span>
                </div>
            </div>
        </div>
    );
}
