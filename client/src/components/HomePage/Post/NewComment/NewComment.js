import React from 'react';
import classes from './NewComment.css';
import Auxiliary from '../../../../hoc/Auxillary';
import defaultProfilePic from '../../../../assets/images/defaultProfilePic.png';
import ContentEditable from 'react-contenteditable';

const newComment = (props) => {
  return (
    <Auxiliary>
      <div
        className={
          props.replyComment ? classes.replyCommentDiv : classes.commentDiv
        }
      >
        <img src={defaultProfilePic} className={classes.profileImage} />
        <ContentEditable
          className={classes.placeCommentDiv}
          html={props.newComment}
          onChange={props.commentChangeHandler}
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
