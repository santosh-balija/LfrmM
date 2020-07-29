import React, { useState, useEffect } from 'react';
import axios from 'axios';

const usePost = (postProperties) => {
  const [Learned, setLearned] = useState({
    count: postProperties.Learned,
    add: true,
  });
  const [Appreciate, setAppreciate] = useState(postProperties.Appreciate);
  const [Share, setShare] = useState(postProperties.Share);

  const learnedClicked = async () => {
    const prev = {
      ...Learned,
    };
    try {
      let res;
      if (Learned.add) {
        res = await axios.post(
          `/reactionsCount/${postProperties._id}/${Learned.count + 1}`
        );
      } else {
        res = await axios.post(
          `/reactionsCount/${postProperties._id}/${Learned.count - 1}`
        );
      }
      console.log(res.data);
      if (res.data.success) {
        prev.count = parseInt(res.data.count);
        prev.add = !prev.add;
        setLearned((prevState) => ({
          ...prevState,
          ...prev,
        }));
      }
    } catch (e) {
      console.log(e);
    }
    console.log(Learned);
  };

  return { Learned, learnedClicked };
};

export default usePost;
