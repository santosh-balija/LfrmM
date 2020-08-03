import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react';

const useComments = (postProperties) => {
  // Comments State
  // console.log(postProperties);
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

  const replyToMainComment = (newComment, indexOfMainComment) => {
    const prev = [...Comments];
    const prevMainComment = prev[indexOfMainComment];
    const prevMainSubComments = [...prevMainComment.subComments];
    prevMainSubComments.splice(0, 0, newComment);
    prevMainComment.subComments = [...prevMainSubComments];
    prev[indexOfMainComment] = prevMainComment;
    setComments([...prev]);
  };

  const replyToSubComment = (
    newSubComment,
    indexOfMainComment,
    indexOfSubComment
  ) => {
    console.log(indexOfMainComment);
    const prev = [...Comments];
    const prevMainComment = prev[indexOfMainComment];
    console.log(prevMainComment);
    const prevMainSubComments = [...prevMainComment.subComments];
    prevMainSubComments.splice(indexOfSubComment + 1, 0, newSubComment);
    prevMainComment.subComments = [...prevMainSubComments];
    prev[indexOfMainComment] = prevMainComment;
    setComments([...prev]);
  };
  return {
    Comments,
    postId,
    newComment,
    commentChangeHandler,
    appendNewComment,
    replyToMainComment,
    replyToSubComment,
  };
};

export default useComments;
