import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useHomePage = (name) => {
  const [state, setState] = useState({
    name: name,
    showPostModal: false,
  });
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log('useEffect in HomePage');
    async function getPosts() {
      try {
        const posts = await axios.get('/getPosts');
        setPosts(posts.data.posts);
        // console.log(posts.data.posts);
      } catch (e) {
        console.log(e);
      }
    }
    getPosts();
  }, []);
  const togglePostModal = () => {
    const prev = { ...state };
    const prevModalState = prev.showPostModal;
    prev.showPostModal = !prevModalState;
    setState((prevState) => ({
      ...prevState,
      ...prev,
    }));
    console.log(state);
  };
  return { state, togglePostModal, posts };
};

export default useHomePage;
