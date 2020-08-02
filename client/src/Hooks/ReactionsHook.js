import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useReactions = (postProperties) => {
  // Learned State
  const [Learned, setLearned] = useState({
    count: postProperties.learnedCount,
    add: postProperties.learnedClicked,
  });
  //Appreciate State
  const [Appreciate, setAppreciate] = useState({
    count: postProperties.appreciateCount,
    add: postProperties.appreciateClicked,
  });
  //Share state to show shared or not
  const [Share, setShare] = useState({
    shared: postProperties.shareClicked,
  });
  //Comments to show the count and showed or not
  const [Comments, setComments] = useState({
    count: postProperties.commentCount,
    show: false,
  });

  // Function when Learned or Appreciate is clicked
  const clicking = (previousState, setPreviousState) => {
    console.log(previousState.add);
    const prev = {
      ...previousState,
    };
    if (previousState.add) {
      prev.count = prev.count - 1;
    } else {
      prev.count = prev.count + 1;
    }
    prev.add = !prev.add;
    setPreviousState((prevState) => ({
      ...prevState,
      ...prev,
    }));
  };

  const learnedClicked = () => {
    clicking(Learned, setLearned);
  };

  const appreciateClicked = () => {
    clicking(Appreciate, setAppreciate);
  };

  const commentClicked = () => {
    const prev = {
      ...Comments,
    };
    prev.show = !prev.show;
    setComments((prevState) => ({
      ...prevState,
      ...prev,
    }));
  };
  // Backend storing
  //   try {
  //     let res;
  //     if (Learned.add) {
  //       prev.count = Learned.count + 1;
  //       prev.add = !prev.add;
  //       setLearned((prevState) => ({
  //         ...prevState,
  //         ...prev,
  //       }));
  //       res = await axios.post(
  //         `/reactionsCount/${postProperties._id}/${Learned.count + 1}`
  //       );
  //     } else {
  //       res = await axios.post(
  //         `/reactionsCount/${postProperties._id}/${Learned.count - 1}`
  //       );
  //       prev.count = Learned.count - 1;
  //       prev.add = !prev.add;
  //       setLearned((prevState) => ({
  //         ...prevState,
  //         ...prev,
  //       }));
  //     }
  //     console.log(res.data);
  //     if (res.data.success) {
  //       // prev.count = parseInt(res.data.count);
  //       // prev.add = !prev.add;
  //       // setLearned((prevState) => ({
  //       //   ...prevState,
  //       //   ...prev,
  //       // }));
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   console.log(Learned);
  // };

  return {
    Learned,
    learnedClicked,
    appreciateClicked,
    commentClicked,
    Appreciate,
    Comments,
    Share,
  };
};

export default useReactions;
