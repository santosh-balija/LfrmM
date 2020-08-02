import React from 'react';
import Auxiliary from '../../../../hoc/Auxillary';
import OtherComments from '../MainComments/MainComments';
import NewComment from './../NewComment/NewComment';

import useComment from '../../../../Hooks/CommentHook';

const comment = (props) => {
  const {
    Comments,
    postId,
    newComment,
    commentChangeHandler,
    appendNewComment,
  } = useComment(props);
  return props.show ? (
    <Auxiliary>
      <NewComment
        commentChangeHandler={commentChangeHandler}
        appendNewComment={appendNewComment}
      />
      {Comments.map((eachMainComment, index) => (
        <OtherComments
          mainCommentData={eachMainComment}
          postIdProp={postId}
          replyToMainComment={() => replyToMainComment(index)}
          indexNum={mainCommentindexId++}
          replyToSubComments={replyToSubComments}
        />
      ))}
    </Auxiliary>
  ) : null;
};

export default comment;
