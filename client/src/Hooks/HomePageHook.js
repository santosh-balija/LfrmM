import React, { useState, useEffect } from 'react';

const useHomePage = (name) => {
  const [state, setState] = useState({
    name: name,
    showPostModal: false,
  });
  const togglePostModal = () => {
    const prev = { ...state };
    const prevModalState = prev.showPostModal;
    prev.showPostModal = !prevModalState;
    setState((prevState) => ({
      ...prevState,
      ...prev,
    }));
  };
  return { state, togglePostModal };
};

export default useHomePage;
