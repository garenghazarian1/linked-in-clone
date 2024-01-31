import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const PostComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postImage, setPostImage] = useState('');

  const handlePostClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePostSubmit = () => {
    // Handle post submission logic here
    console.log('Post Submitted:', { postTitle, postContent, postImage });
    setPostTitle('');
    setPostContent('');
    setPostImage('');

    // Close the modal
    setIsModalOpen(false);
  };

  const handleImageUpload = (e) => {
    setPostImage(e.target.files[0]);
  };

  return (
    <div className="bg-white p-4 rounded-md border">
      <div className="flex items-center mb-4">
        {/* Going to be Profile pic */}
        <img
          className="h-10 w-10 rounded-full mr-4"
          src="user-image.jpg"  
          alt="User"
        />
        <input 
          type="text"
          className="w-full border border-gray-400 rounded-full p-2 pl-6 placeholder:font-bold"
          placeholder="Start a post"
          onClick={handlePostClick}
        />
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            {/* User Profile img display */}
            <div className="flex justify-between items-center">
            <img
            className="h-10 w-10 rounded-full mr-4"
            src="user-image.jpg"  
            alt="User"
            />
            <button
              className="text-gray-600 px-4 py-2 ml-2"
              onClick={handleModalClose}
            >
              X
            </button>
            </div>

            <input
              type="text"
              className="w-full mb-2 p-2 placeholder:text-gray-400"
              placeholder="Title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <textarea
              className="w-full mb-2 p-2 placeholder:text-gray-400 placeholder:text-[20px] h-28"
              placeholder="What do you want to talk about?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />

            <div className="flex justify-between m-2">
            <label htmlFor="post-image" className="cursor-pointer">
              <FontAwesomeIcon icon={faImage} className="mr-2 text-gray-500" />
            </label>
            <input
              type="file"
              id="post-image"
              className="hidden"
              name="post-image"
              onChange={handleImageUpload}
            />
            <button
              className="bg-gray-200 font-bold text-gray-400 px-4 py-2 rounded-full"
              onClick={handlePostSubmit}
            >
              Post
            </button>
            </div>
          
          </div>
        </div>
      )}
    </div>
  );
};

export default PostComponent;
