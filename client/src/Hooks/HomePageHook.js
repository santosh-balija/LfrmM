import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useHomePage = (name) => {
  const [state, setState] = useState({
    name: name,
    showPostModal: false,
  });
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    try {
      const posts = await axios.get('/getPosts');
    } catch (e) {}
  });
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
  return { state, togglePostModal };
};

export default useHomePage;
