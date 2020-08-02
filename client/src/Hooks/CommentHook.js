import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react';

const useComments = (postProperties) => {
  // Comments State
  console.log(postProperties);
  const [Comments, setComments] = useState(postProperties.mainComments);

  const [postId, setPostId] = useState(postProperties.postId);

  const newComment = useRef('');

  const commentChangeHandler = (event) => {
    newComment.current = event.target.value;
    console.log(newComment.current);
  };

  const appendNewComment = () => {
    const appendComment = {
      commentId: postId,
      profileName: 'PName',
      designation: 'Desig',
      institute: 'Inst',
      comment: newComment.current,
      loadMoreSubComments: false,
      subComments: [],
    };

    const prev = [...Comments];
    console.log(prev);
    prev.splice(0, 0, appendComment);
    console.log(prev);
    setComments([...prev]);
    // console.log(Comments);
  };

  return {
    Comments,
    postId,
    newComment,
    commentChangeHandler,
    appendNewComment,
  };
};

export default useComments;
