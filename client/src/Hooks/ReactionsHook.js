import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useReactions = (postProperties) => {
  const [Learned, setLearned] = useState(postProperties.Learned);
  const [Appreciate, setAppreciate] = useState(postProperties.Appreciate);
  const [Share, setShare] = useState(postProperties.Share);

  const learnedClicked = async () => {
    try {
    } catch (e) {}
  };

  return { learnedClicked };
};

export default useReactions;
