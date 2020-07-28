import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react';

const usePostModal = (redirectToHome) => {
  const mistake = useRef('');
  const learning = useRef('');
  const mistakeRef = useRef();
  // To have the focus on the mistake div
  useEffect(() => {
    mistakeRef.current.focus();
  }, []);
  // To store the value of the mistake in the mistake ref ==> as we cannot use useState for ContentEditable
  const mistakeChangeHandler = (event) => {
    mistake.current = event.target.value;
  };
  // To store the value of the learning in the mistake ref ==> as we cannot use useState for ContentEditable
  const learningChangeHandler = (event) => {
    learning.current = event.target.value;
  };
  // When the user posts the new post
  const newPostSubmitHandler = async (event) => {
    event.preventDefault();
    let data = {
      mistake: mistake.current,
      learning: learning.current,
    };
    try {
      // Store the new post in the database
      const res = await axios.post('/newpost', data);
      // If the post is saved successfully
      if (res.data.success) {
        redirectToHome();
      }
    } catch (err) {
      console.error(err);
    }
  };
  return {
    mistake,
    learning,
    mistakeRef,
    mistakeChangeHandler,
    learningChangeHandler,
    newPostSubmitHandler,
  };
};

export default usePostModal;
