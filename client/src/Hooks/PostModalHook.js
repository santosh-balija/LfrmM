import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react';

const usePostModal = (redirectToHome) => {
  const mistake = useRef('');
  const learning = useRef('');
  const mistakeRef = useRef();
  useEffect(() => {
    mistakeRef.current.focus();
  });
  const mistakeChangeHandler = (event) => {
    mistake.current = event.target.value;
  };
  const learningChangeHandler = (event) => {
    mistake.current = event.target.value;
  };
  const newPostSubmitHandler = async (event) => {
    event.preventDefault();
    let data = {
      mistake: mistake.current,
      learning: learning.current,
    };
    try {
      const res = await axios.post('/newpost', data);
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
