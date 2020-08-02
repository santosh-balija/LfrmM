import React from 'react';
import Auxiliary from '../../../../hoc/Auxillary';
import defaultProfilePic from '../../../../assets/images/defaultProfilePic.png';
import ContentEditable from 'react-contenteditable';

const newComment = () => {
  return (
    <Auxiliary>
      <div className={classes.commentDiv}>
        <img src={defaultProfilePic} className={classes.profileImage} />
        <ContentEditable
          className={classes.placeCommentDiv}
          html={newComment.current}
          onChange={commentChangeHandler}
          placeholder='Add a comment...'
        />
      </div>
      <button
        className={classes.postCommentBtn}
        onClick={props.appendNewComment}
      >
        Post
      </button>
    </Auxiliary>
  );
};

export default newComment;
