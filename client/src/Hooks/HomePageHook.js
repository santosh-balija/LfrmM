import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useHomePage = (name) => {
  // State to display the newPost component
  const [state, setState] = useState({
    name: name,
    showPostModal: false,
  });

  // To store the posts before the home page loads
  const [posts, setPosts] = useState([]);

  // To get the posts in the database before the componenet loads
  useEffect(() => {
    async function getPosts() {
      try {
        // Get the posts from the database
        const posts = await axios.get('/getPosts');
        setPosts(posts.data.posts);
      } catch (e) {
        console.log(e);
      }
    }
    // Call the function to fetch the posts
    getPosts();
  }, []);

  // Function to make the newPost Modal toggle
  const togglePostModal = () => {
    const prev = { ...state };
    const prevModalState = prev.showPostModal;
    prev.showPostModal = !prevModalState;
    setState((prevState) => ({
      ...prevState,
      ...prev,
    }));
  };

  return { state, togglePostModal, posts };
};

export default useHomePage;
