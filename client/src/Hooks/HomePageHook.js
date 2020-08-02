import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useHomePage = (name) => {
  // State to display the newPost component
  const [state, setState] = useState({
    name: name,
    showPostModal: false,
  });
  // To store the posts before the home page loads
  const [posts, setPosts] = useState([]);

  // When the user clicks on the Post button
  const newPostSubmitHandler = async (mistake, learning) => {
    console.log(mistake, learning);
    // event.preventDefault();
    togglePostModal();
    const post = {
      postId: 5456,
      profileName: 'My Profile',
      designation: 'My Desig',
      institute: 'My Insti',
      mistake: mistake,
      learning: learning,
      saved: false,
      viewed: false,
      learnedCount: 0,
      appreciateCount: 0,
      shareCount: 0,
      commentCount: 0,
      learnedClicked: false,
      appreciateClicked: false,
      shareClicked: false,
      loadMoreComments: false,
      mainComments: [],
    };
    console.log(posts);
    const prevPosts = [...posts];
    console.log(prevPosts);
    prevPosts.splice(0, 0, post);
    setPosts([...prevPosts]);

    // To store in the backend
    let data = {
      mistake: mistake,
      learning: learning,
    };
    try {
      // Store the new post in the database
      const res = await axios.post('/newpost', data);
      // If the post is saved successfully
      if (res.data.success) {
        // redirectToHome();
      }
    } catch (err) {
      console.error(err);
    }
  };
  // To get the posts in the database before the componenet loads
  // useEffect(() => {
  //   async function getPosts() {
  //     try {
  //       // Get the posts from the database
  //       const posts = await axios.get('/getPosts');
  //       setPosts(posts.data.posts);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   // Call the function to fetch the posts
  //   getPosts();
  // }, []);

  // Function to make the newPost Modal toggle

  const togglePostModal = () => {
    console.log('HELLO');
    // event.preventDefault();
    // event.stopPropagation();
    const prev = { ...state };
    const prevModalState = prev.showPostModal;
    prev.showPostModal = !prevModalState;
    setState((prevState) => ({
      ...prevState,
      ...prev,
    }));
  };

  return {
    state,
    posts,
    newPostSubmitHandler,
    togglePostModal,
  };
};

export default useHomePage;
