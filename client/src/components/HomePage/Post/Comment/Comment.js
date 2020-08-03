import React from 'react';
import Auxiliary from '../../../../hoc/Auxillary';
import MainComments from '../MainComments/MainComments';
import NewComment from './../NewComment/NewComment';

import useComment from '../../../../Hooks/CommentHook';

const comment = (props) => {
  const {
    Comments,
    postId,
    newComment,
    commentChangeHandler,
    appendNewComment,
    replyToMainComment,
    replyToSubComment,
  } = useComment(props);
  return props.show ? (
    <Auxiliary>
      <NewComment
        replyComment={false}
        newComment={newComment.current}
        commentChangeHandler={commentChangeHandler}
        appendNewComment={appendNewComment}
      />
      {Comments.map((eachMainComment, index) => (
        <MainComments
          mainCommentData={eachMainComment}
          postIdProp={postId}
          indexOfMainComment={index}
          replyToMainComment={replyToMainComment}
          replyToSubComment={replyToSubComment}
        />
      ))}
    </Auxiliary>
  ) : null;
};

export default comment;
